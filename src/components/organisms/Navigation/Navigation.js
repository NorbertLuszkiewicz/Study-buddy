import React, { useState } from 'react';
import { useAuth } from 'hooks/useAuth.js';
import { Logo } from 'components/atoms/Logo/Logo.js';
import { StyledLink, Wrapper, StyledLogout, StyledBurger, StyledMenu } from './Navigation.styles.js';
import { useViewport } from 'hooks/useViewport.js';

const Navigation = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <>
      {width > breakpoint ? (
        <Wrapper>
          <Logo />
          <StyledLink to="/dashboard">Dashboard</StyledLink>
          <StyledLink to="/messages">Messages</StyledLink>
          <StyledLink to="/notes">Notes</StyledLink>
          <StyledLogout onClick={auth.signOut}>Log out</StyledLogout>
        </Wrapper>
      ) : (
        <Wrapper>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <StyledMenu open={open}>
            <StyledLink onClick={() => setOpen(!open)} to="/dashboard">
              Dashboard
            </StyledLink>
            <StyledLink onClick={() => setOpen(!open)} to="/messages">
              Messages
            </StyledLink>
            <StyledLink onClick={() => setOpen(!open)} to="/notes">
              Notes
            </StyledLink>
            <StyledLogout onClick={auth.signOut}>Log out</StyledLogout>
          </StyledMenu>
        </Wrapper>
      )}
    </>
  );
};

export default Navigation;
