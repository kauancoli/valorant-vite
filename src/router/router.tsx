import { Agent, Home } from '@/Pages/index';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
};
