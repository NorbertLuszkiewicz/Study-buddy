import React from 'react';
import { useAuth } from 'hooks/useAuth.js';
import { Logo } from 'components/atoms/Logo/Logo.js';
import { StyledLink, Wrapper, StyledLoguout } from './Navigation.styles.js';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo />
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/messages">Messages</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLoguout onClick={auth.signOut}>Log out</StyledLoguout>
    </Wrapper>
  );
};

export default Navigation;
