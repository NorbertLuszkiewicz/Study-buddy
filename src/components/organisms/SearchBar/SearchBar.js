import React from 'react';
import { SearchBarWrapper, StatusInfo, SmallText } from 'components/organisms/SearchBar/SearchBar.styles.js';
import { useAuth } from 'hooks/useAuth.js';

const SearchBar = () => {
  const { user } = useAuth();

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>{user.name}</strong>
        </p>
        <SmallText>
          <small>{user.isTeacher ? 'Teacher' : 'Student'}</small>
        </SmallText>
      </StatusInfo>
    </SearchBarWrapper>
  );
};

export default SearchBar;
