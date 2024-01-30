import { AgentPage, Home, List } from '@/pages/index';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<List />} />
        <Route path="/:name" element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  );
};
