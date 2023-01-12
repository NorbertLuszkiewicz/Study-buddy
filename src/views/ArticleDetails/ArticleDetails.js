import React from 'react';
import { Wrapper, Description, Image, GridBox } from './ArticleDetails.styles.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import { useGetArticles } from 'api/services/article.js';
import { Title } from 'components/atoms/Title/Title.js';

const ArticleDetails = () => {
  const { data, isLoading, isError } = useGetArticles();
  const articleId = window.location.pathname.replace('/article/', '');
  const article = data.articles.find((article) => article._id === articleId);

  if (isLoading) return <Spinner />;
  if (!article || isError) return <div>Article not found</div>;
  if (data.articles.length === 0) return <div>No articles to display</div>;

  return (
    <Wrapper>
      <Title>{article.title}</Title>
      <GridBox>
        <Description>{article.description}</Description>
        <Image img src={article.img}></Image>
      </GridBox>
    </Wrapper>
  );
};

export default ArticleDetails;
