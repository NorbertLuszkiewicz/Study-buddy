import React from 'react';

import { Wrapper, ChildrenWrapper } from 'components/templates/MainTemplate/MainTemplate.styles.js';
import TopBar from 'components/organisms/TopBar/TopBar.js';
import Navigation from 'components/organisms/Navigation/Navigation.js';
import { useViewport } from 'hooks/useViewport.js';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget.js';
import ArticleList from 'components/organisms/ArticleList/ArticleList.js';

const MainTemplate = ({ children, isFullScreen }) => {
  const { width } = useViewport();
  const breakpoint = 1024;

  return (
    <Wrapper isFullScreen={isFullScreen}>
      <Navigation />
      <TopBar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {!isFullScreen && width > breakpoint && <ArticleList />}
      {width > breakpoint && <NotesWidget />}
    </Wrapper>
  );
};

export default MainTemplate;
