import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label.js';
import { Input } from 'components/atoms/Input/Input.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 350px;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text', isTextarea, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextarea ? (
        <Input
          isTextarea
          as="textarea"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          data-testid={label}
          {...props}
          ref={ref}
        />
      ) : (
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          data-testid={label}
          {...props}
          ref={ref}
        />
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
