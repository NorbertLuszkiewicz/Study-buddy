import React, { useState } from 'react';
import { Wrapper, Student, ButtonWrapper, SelectStyled } from 'components/organisms/StudentList/StudentList.styles.js';
import { useGetStudent, useRemoveStudentClass } from 'api/services/students.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import { useAuth } from 'hooks/useAuth.js';
import { Average } from 'components/atoms/Average/Average.js';
import { ReactComponent as GradeIcon } from 'assets/icons/grade-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg';
import IconButton from 'components/atoms/IconButton/IconButton.js';
import { calcGradeAverage, getSubjectsOptions } from 'helpers/helpers.js';
import YesCancelModal from 'components/molecules/YesCancelModal/YesCancelModal.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { useError } from 'hooks/useError.js';
import Modal from 'components/molecules/Modal/Modal.js';
import MessageForm from 'components/organisms/MessageForm/MessageForm.js';
import GradeForm from '../GradeForm/GradeForm.js';

const StudentList = ({ name }) => {
  const { mutate: removeStudentClass } = useRemoveStudentClass();
  let { data, isLoading } = useGetStudent(name);
  const { user } = useAuth();
  const options = getSubjectsOptions(user.subjects, name);

  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();

  const [selectedSubject, setSelectedSubject] = useState(options[0]);
  const [openRemoveStudentModal, setOpenRemoveStudentModal] = useState({ isOpen: false });
  const [openSendMessageModal, setOpenSendMessageModal] = useState({ isOpen: false });
  const [openAddGradeModal, setOpenAddGradeModal] = useState({ isOpen: false });

  const handleRemoveStudentClass = (email, className) => {
    removeStudentClass(
      { email, className },
      {
        onSuccess: () => {
          dispatchAction('Student removed from class.');
          setOpenRemoveStudentModal({ isOpen: false });
        },
        onError: () => dispatchError('Error while removing student from class.'),
      }
    );
  };

  if (isLoading)
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );

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
        const gradesAverage = calcGradeAverage(student.subjects, name, selectedSubject.value);
        return (
          <Student key={student._id}>
            <Average value={gradesAverage}>{gradesAverage}</Average>
            <p>{student.name}</p>
            <ButtonWrapper>
              <IconButton
                title="Add grade"
                onClick={() => setOpenAddGradeModal({ isOpen: true, email: student.email })}
              >
                <GradeIcon />
              </IconButton>
              <IconButton
                title="Send message"
                onClick={() => setOpenSendMessageModal({ isOpen: true, email: student.email })}
              >
                <MessageIcon />
              </IconButton>
              <IconButton
                isRed
                title="Remove the user from the class"
                onClick={() => setOpenRemoveStudentModal({ isOpen: true, email: student.email })}
              >
                <DeleteIcon />
              </IconButton>
            </ButtonWrapper>
          </Student>
        );
      })}
      <Modal open={openAddGradeModal.isOpen} onClose={() => setOpenAddGradeModal({ isOpen: false })}>
        <GradeForm studentEmail={openAddGradeModal.email} subjectName={selectedSubject.value} />
      </Modal>
      <Modal open={openSendMessageModal.isOpen} onClose={() => setOpenSendMessageModal({ isOpen: false })}>
        <MessageForm studentEmail={openSendMessageModal.email} />
      </Modal>
      <YesCancelModal
        open={openRemoveStudentModal.isOpen}
        onClose={() => setOpenRemoveStudentModal({ isOpen: false })}
        title="Remove student from class"
        description="Are you sure you want to remove this student from the class?"
        successFn={() => handleRemoveStudentClass(openRemoveStudentModal.email, name)}
      />
    </Wrapper>
  );
};

export default StudentList;
