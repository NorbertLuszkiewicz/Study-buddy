import React from 'react';
import { Title, Author, Wrapper, Description } from './Message.styles.js';

const Message = ({ author, createdAt, description, title, student }) => {
  const createdDate = ` (${new Date(createdAt).toLocaleDateString()})`;
  return (
    <Wrapper isStudent={!!student}>
      <Title>{title}</Title>
      <Author>
        {author} {createdDate}
      </Author>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Message;
