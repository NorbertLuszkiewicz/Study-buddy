import React, { useState } from 'react';
import { Wrapper, Student, ButtonWrapper, SelectStyled } from 'components/organisms/StudentList/StudentList.styles.js';
import { useGetStudent } from 'api/services/students.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import { useAuth } from 'hooks/useAuth.js';
import { Average } from 'components/atoms/Average/Average.js';
import { ReactComponent as GradeIcon } from 'assets/icons/grade-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg';
import IconButton from 'components/atoms/IconButton/IconButton.js';

const calcGradeAverage = (subjects, className, subjectName) => {
  let gradeAverage = '-';
  subjects.forEach((subject) => {
    if (subject.class === className && subject.name === subjectName && subject.grades.length !== 0) {
      const gradeSum = subject.grades.reduce((a, b) => a + b, 0);
      gradeAverage = gradeSum / subject.grades.length;
    }
  });
  return gradeAverage;
};

const StudentList = ({ name }) => {
  let { data, isLoading } = useGetStudent(name);
  const { user } = useAuth();
  const options = user.subjects
    ?.filter((x) => x.class === name)
    .map((subject) => {
      return { value: subject.name, label: subject.name };
    });
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  if (isLoading)
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  console.log(options);

  if (options.length === 0) return <div>Don't have any subjects</div>;
  if (data.students.length === 0) return <div>No students to display</div>;

  return (
    <Wrapper>
      <SelectStyled
        classNamePrefix="Select"
        defaultValue={selectedSubject}
        options={options}
        onChange={setSelectedSubject}
      />
      {data.students.map((student) => {
        const gradeAverage = calcGradeAverage(student.subjects, name, selectedSubject.value);
        return (
          <Student key={student._id}>
            <Average value={gradeAverage}>{gradeAverage}</Average>
            <p>{student.name}</p>
            <ButtonWrapper>
              <IconButton>
                <GradeIcon />
              </IconButton>
              <IconButton>
                <MessageIcon />
              </IconButton>
              <IconButton isRed>
                <DeleteIcon />
              </IconButton>
            </ButtonWrapper>
          </Student>
        );
      })}
    </Wrapper>
  );
};

export default StudentList;
