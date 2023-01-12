import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js';
import Dashboard from 'views/Dashboard/Dashboard.js';
import ArticleDetails from 'views/ArticleDetails/ArticleDetails.js';
import Messages from 'views/Messages/Messages.js';
import Notes from 'views/Notes/Notes.js';

const View = ({ children, isFullScreen }) => <MainTemplate isFullScreen={isFullScreen}>{children}</MainTemplate>;

const Authenticated = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<View children={<Dashboard />} />} />
      <Route path="article/:id" element={<View children={<ArticleDetails />} isFullScreen />} />
      <Route path="messages" element={<View children={<Messages />} />} />
      <Route path="notes" element={<View children={<Notes />} />} />
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
};

export default Authenticated;
