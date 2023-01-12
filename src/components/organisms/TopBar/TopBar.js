import React from 'react';
import { Wrapper, StatusInfo, SmallText } from 'components/organisms/TopBar/TopBar.styles.js';
import { useAuth } from 'hooks/useAuth.js';

const TopBar = () => {
  const { user } = useAuth();

  return (
    <Wrapper>
      <StatusInfo>
        <p style={{ marginTop: '0' }}>Logged as:</p>
        <p>
          <strong>{user.name}</strong>
        </p>
        <SmallText>
          <small>{user.isTeacher ? 'Teacher' : 'Student'}</small>
        </SmallText>
      </StatusInfo>
    </Wrapper>
  );
};

export default TopBar;
