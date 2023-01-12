import React from 'react';
import { mount } from 'test-utils';

import ErrorMessage from './ErrorMessage.js';

let errorMessage;
let errorMessageMessage;
let errorMessageTitle;

beforeEach(() => {
  errorMessage = mount(<ErrorMessage message="test message" />);
  errorMessageMessage = errorMessage.find('p');
  errorMessageTitle = errorMessage.find('h1');
});

describe('Error Message', () => {
  it('should render one message and title', () => {
    expect(errorMessageMessage).toHaveLength(1);
    expect(errorMessageTitle).toHaveLength(1);
  });

  it('should have custom error message', () => {
    expect(errorMessageMessage.text()).toBe('test message');
  });
});
