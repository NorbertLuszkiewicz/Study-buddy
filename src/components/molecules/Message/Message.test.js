import React from 'react';
import { mount } from 'test-utils';

import { Title, Author, Description } from './Message.styles.js';
import Message from './Message.js';

let message;
let messageDescription;
let messageAuthor;
let messageTitle;

beforeEach(() => {
  message = mount(
    <Message author="author" createdAt="2000.12.21" description="important message" title="test title" />
  );
  messageDescription = message.find(Description);
  messageAuthor = message.find(Author);
  messageTitle = message.find(Title);
});

describe('Message', () => {
  it('should render one author, description and title', () => {
    expect(messageDescription).toHaveLength(1);
    expect(messageTitle).toHaveLength(1);
    expect(messageAuthor).toHaveLength(1);
  });

  it('should have custom text in author, description and title', () => {
    expect(messageDescription.text()).toBe('important message');
    expect(messageTitle.text()).toBe('test title');
    expect(messageAuthor.text()).toBe('author  (21.12.2000)');
  });
});
