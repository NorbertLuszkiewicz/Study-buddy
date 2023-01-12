import React from 'react';
import { Wrapper, ViewWrapperStyled } from './Messages.styles.js';
import { useAuth } from 'hooks/useAuth.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import { Header } from 'components/atoms/Header/Header.js';
import { useGetMessages } from 'api/services/messages.js';
import Message from 'components/molecules/Message/Message.js';

const Messages = () => {
  const { user } = useAuth();
  const messageData = {
    email: !user.isTeacher && user.email,
    className: user.classes,
    isTeacher: user.isTeacher,
    author: user.isTeacher && user.name,
  };
  const { data, isLoading, isError } = useGetMessages(messageData);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Messages not found</div>;

  const messages = data.messages.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <Wrapper>
      <Header>Messages</Header>
      <ViewWrapperStyled>
        {data.messages.length > 0 ? (
          messages.map(({ _id, author, createdAt, description, title, student }) => (
            <Message
              key={_id}
              author={author}
              createdAt={createdAt}
              description={description}
              title={title}
              student={student}
            />
          ))
        ) : (
          <p>Currently have no new messages</p>
        )}
      </ViewWrapperStyled>
    </Wrapper>
  );
};

export default Messages;
