import React from 'react';
import { StyledButton } from 'components/atoms/IconButton/IconButton.styles.js';

const IconButton = (props) => <StyledButton {...props}>{props.children}</StyledButton>;

export default IconButton;
