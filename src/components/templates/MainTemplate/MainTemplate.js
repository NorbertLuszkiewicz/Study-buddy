import React from 'react';

import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles.js';
import SearchBar from 'components/organisms/SearchBar/SearchBar.js';
import Navigation from 'components/organisms/Navigation/Navigation.js';
import ArticleList from 'components/organisms/ArticleList/ArticleList.js';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <ArticleList />
    </Wrapper>
  );
};

export default MainTemplate;
