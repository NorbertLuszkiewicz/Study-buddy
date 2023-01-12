import React from 'react';
import { mount } from 'test-utils';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledDeleteButton } from 'components/molecules/Note/Note.styles.js';
import Note from './Note.js';

let note;
let noteContent;
let noteTitle;
let noteButton;

beforeEach(() => {
  note = mount(<Note id="123" content="important note" title="test title" />);

  noteContent = note.find('p');
  noteTitle = note.find(Title);
  noteButton = note.find(StyledDeleteButton);
});

describe('Note', () => {
  it('should render one author, description and title', () => {
    expect(noteContent).toHaveLength(1);
    expect(noteTitle).toHaveLength(1);
    expect(noteButton).toHaveLength(1);
  });

  it('should have custom text in author, description and title', () => {
    expect(noteContent.text()).toBe('important note');
    expect(noteTitle.text()).toBe('test title');
    expect(noteButton.text()).toBe('delete-icon.svg');
  });
});
