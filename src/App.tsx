import React from 'react';
import './reset.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Tutorial from './pages/tutorial';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
