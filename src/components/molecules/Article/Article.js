import { Button } from 'components/atoms/Button/Button.js';
import React from 'react';
import { Title, Author, Wrapper, Image, Description, ContentWrapper } from './Article.styles.js';

const Article = ({ title, author, description, img }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <div>
          <Author>{author}</Author>
          <Description>{description}</Description>
          <Button>Read more</Button>
        </div>
        {img && <Image img src={img}></Image>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Article;
