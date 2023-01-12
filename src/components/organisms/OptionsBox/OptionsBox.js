import { useState } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as PenIcon } from 'assets/icons/pen-icon.svg';
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg';
import { ReactComponent as SubjectIcon } from 'assets/icons/subject-icon.svg';
import { Text, Wrapper, Option } from './OptionsBox.styles.js';
import Modal from '../../molecules/Modal/Modal.js';
import MessageForm from 'components/organisms/MessageForm/MessageForm.js';
import ExamForm from 'components/organisms/ExamForm/ExamForm.js';
import CreateSubjectForm from 'components/organisms/CreateSubjectForm/CreateSubjectForm.js';
import RemoveSubjectForm from 'components/organisms/RemoveSubjectForm/RemoveSubjectForm.js';

export const OptionsBox = ({ className }) => {
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [openExamModal, setOpenExamModal] = useState(false);
  const [openCreateSubjectModal, setOpenCreateSubjectModal] = useState(false);
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
      <Option onClick={() => setOpenCreateSubjectModal(true)}>
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
      <Modal open={openCreateSubjectModal} onClose={() => setOpenCreateSubjectModal(false)}>
        <CreateSubjectForm className={className} />
      </Modal>
      <Modal open={openRemoveSubjectModal} onClose={() => setOpenRemoveSubjectModal(false)}>
        <RemoveSubjectForm className={className} />
      </Modal>
    </Wrapper>
  );
};

export default OptionsBox;
