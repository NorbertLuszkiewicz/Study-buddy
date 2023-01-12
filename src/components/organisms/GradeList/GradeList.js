import React, { useState } from 'react';
import { Wrapper, GradeWrapper, SelectStyled, StyledAverage } from 'components/organisms/GradeList/GradeList.styles.js';
import { useAuth } from 'hooks/useAuth.js';
import { Average } from 'components/atoms/Average/Average.js';
import { getSubjectsOptions } from 'helpers/helpers.js';

const GradeList = ({ className }) => {
  const { user } = useAuth();

  const options = getSubjectsOptions(user.subjects, className);
  const [selectedSubject, setSelectedSubject] = useState(options[0]);
  if (options.length === 0) return <div>Don't have any Grades</div>;

  const { grades } = user.subjects.filter(
    (subject) => subject.name === selectedSubject.value && subject.className === className
  )[0];
  return (
    <Wrapper>
      <SelectStyled
        classNamePrefix="Select"
        defaultValue={selectedSubject}
        options={options}
        onChange={setSelectedSubject}
      />
      {grades.length > 0 ? (
        grades.map((grade) => {
          const gradesSum = grades.reduce((acc, grade) => acc + grade.value, 0);
          const gradesAverage = (gradesSum / grades.length).toFixed(2);
          return (
            <div key={grade._id}>
              <StyledAverage value={gradesAverage}>{gradesAverage}</StyledAverage>
              <GradeWrapper>
                <Average value={grade.value}>{grade.value.toFixed(2)}</Average>
                <p>{grade.name}</p>
              </GradeWrapper>
            </div>
          );
        })
      ) : (
        <p>You don't have any grades yet.</p>
      )}
    </Wrapper>
  );
};

export default GradeList;
