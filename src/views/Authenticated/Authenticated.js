import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js';
import Dashboard from 'views/Dashboard/Dashboard.js';

const Authenticated = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="group/:id?" element={<Dashboard />} />
        <Route path="messages" element={<Dashboard />} />
        <Route path="settings" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </MainTemplate>
  );
};

export default Authenticated;
