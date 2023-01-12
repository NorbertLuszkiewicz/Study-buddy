import React from 'react';
import { mount } from 'test-utils';
import FormField from './FormField.js';

let formField;
let formFieldInput;
let formFieldTextarea;
let formFieldLabel;

beforeEach(() => {
  formField = mount(<FormField label="name" name="name" id="name" />);
  formFieldInput = formField.find('input');
  formFieldTextarea = formField.find('textarea');
  formFieldLabel = formField.find('label');
});

describe('Form Field', () => {
  it('should render one input and label', () => {
    expect(formFieldInput).toHaveLength(1);
    expect(formFieldLabel).toHaveLength(1);
  });

  it('should render label with "name" value', () => {
    expect(formFieldLabel.text()).toBe('name');
  });

  it('should render textarea if isTextarea is true', () => {
    expect(formFieldInput.type()).toEqual('input');
    expect(formFieldTextarea.length).toBe(0);

    formField = mount(<FormField label="name" name="name" id="name" isTextarea />);
    formFieldInput = formField.find('input');
    formFieldTextarea = formField.find('textarea');

    expect(formFieldInput.length).toBe(0);
    expect(formFieldTextarea.type()).toEqual('textarea');
  });
});
