import React, { useState } from 'react';
import { useGetArticles } from 'api/services/article.js';
import Article from 'components/molecules/Article/Article.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';
import { NewsSectionHeader, Wrapper, StyledButton, FlexBox } from './ArticleList.styles.js';
import { useAuth } from 'hooks/useAuth.js';
import Modal from 'components/molecules/Modal/Modal.js';
import ArticleForm from '../ArticleForm/ArticleForm.js';

const ArticleList = () => {
  const { data, isLoading } = useGetArticles();
  const { user } = useAuth();
  const [openArticleFormModal, setOpenArticleFormModal] = useState(false);

  if (isLoading) return <Spinner />;
  if (data.articles.length === 0) return <div>No articles to display</div>;

  return (
    <Wrapper>
      <FlexBox>
        <NewsSectionHeader>University news feed</NewsSectionHeader>
        {user.isTeacher && <StyledButton onClick={() => setOpenArticleFormModal(true)}> Create new</StyledButton>}
      </FlexBox>
      {data.articles.map(({ title, author, img, description, _id }) => (
        <Article key={_id} title={title} author={author} img={img} description={description} id={_id}></Article>
      ))}
      <Modal open={openArticleFormModal} onClose={() => setOpenArticleFormModal(false)}>
        <ArticleForm />
      </Modal>
    </Wrapper>
  );
};

export default ArticleList;
