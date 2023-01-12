import React from 'react';
import { mount } from 'test-utils';

import SuccessMessage from './SuccessMessage.js';

let successMessage;
let successMessageMessage;
let successMessageTitle;

beforeEach(() => {
  successMessage = mount(<SuccessMessage message="test message" />);
  successMessageMessage = successMessage.find('p');
  successMessageTitle = successMessage.find('h1');
});

describe('Success Message', () => {
  it('should render one message and title', () => {
    expect(successMessageMessage).toHaveLength(1);
    expect(successMessageTitle).toHaveLength(1);
  });

  it('should have custom success message', () => {
    expect(successMessageMessage.text()).toBe('test message');
  });
});
