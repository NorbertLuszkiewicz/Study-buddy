import { Button } from 'components/atoms/Button/Button.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Author, Wrapper, Image, Description, ContentWrapper } from './Article.styles.js';

const Article = ({ title, author, description, img, id }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <div>
          <Author>{author}</Author>
          <Description>{description}</Description>
          <Button onClick={() => navigate(`/article/${id}`)}>Read more</Button>
        </div>
        {img && <Image img src={img}></Image>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Article;
