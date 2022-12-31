import { useGetArticle } from 'api/services/article.js';
import Article from 'components/molecules/Article/Article.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import React from 'react';
import { NewsSectionHeader, Wrapper } from './ArticleList.styles.js';

const ArticleList = () => {
  const { data, isLoading } = useGetArticle();

  if (isLoading) return <Spinner />;
  if (data.articles.length === 0) return <div>No articles to display</div>;

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.articles.map(({ title, author, img, description }) => (
        <Article title={title} author={author} img={img} description={description}></Article>
      ))}
    </Wrapper>
  );
};

export default ArticleList;
