import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title.js';
import { Wrapper } from 'components/molecules/SuccessMessage/SuccessMessage.styles.js';

const defaultSuccessMessage = 'Action completed successfully.';

const SuccessMessage = ({ message = defaultSuccessMessage }) => {
  return (
    <Wrapper>
      <Title>Congratulations!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

SuccessMessage.propTypes = {
  message: PropTypes.string,
};

export default SuccessMessage;
