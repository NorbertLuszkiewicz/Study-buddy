import { useState } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as PenIcon } from 'assets/icons/pen-icon.svg';
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg';
import { ReactComponent as SubjectIcon } from 'assets/icons/subject-icon.svg';
import { Text, Wrapper, Option } from './OptionsBox.styles.js';
import Modal from '../Modal/Modal.js';
import MessageForm from 'components/organisms/MessageForm/MessageForm.js';
import ExamForm from 'components/organisms/ExamForm/ExamForm.js';
import SubjectForm from 'components/organisms/SubjectForm/SubjectForm.js';

export const OptionsBox = ({ className }) => {
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [openExamModal, setOpenExamModal] = useState(false);
  const [openAddSubjectModal, setOpenAddSubjectModal] = useState(false);
  const [openRemoveSubjectModal, setOpenRemoveSubjectModal] = useState(false);

  return (
    <Wrapper>
      <Option onClick={() => setOpenMessageModal(true)}>
        <MessageIcon className="icon" />
        <Text>Message to whole group</Text>
      </Option>
      <Option onClick={() => setOpenExamModal(true)}>
        <PenIcon className="icon" />
        <Text>Schedule exam</Text>
      </Option>
      <Option onClick={() => setOpenAddSubjectModal(true)}>
        <SubjectIcon className="icon" />
        <Text>Create Subject</Text>
      </Option>
      <Option className="option--red" onClick={() => setOpenRemoveSubjectModal(true)}>
        <DeleteIcon className="icon" />
        <Text>Remove Subject</Text>
      </Option>
      <Modal open={openMessageModal} onClose={() => setOpenMessageModal(false)}>
        <MessageForm className={className} />
      </Modal>
      <Modal open={openExamModal} onClose={() => setOpenExamModal(false)}>
        <ExamForm className={className} />
      </Modal>
      <Modal open={openAddSubjectModal} onClose={() => setOpenAddSubjectModal(false)}>
        <SubjectForm className={className} />
      </Modal>
      <Modal open={openRemoveSubjectModal} onClose={() => setOpenRemoveSubjectModal(false)}></Modal>
    </Wrapper>
  );
};

export default OptionsBox;
