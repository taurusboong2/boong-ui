import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import './reset.scss';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
const Tutorial = React.lazy(() => import('./pages/tutorial'));

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default hot(App);
