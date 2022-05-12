import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import './reset.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
const Tutorial = React.lazy(() => import('./pages/tutorial'));
const TutorialStyled = React.lazy(() => import('./pages/tutorial-styled'));
import Pagination from './pages/pagination';
import Detail from './pages/detail';
import PaginationCreate from './pages/paginationCreate';
import PaginationPatch from './pages/paginationPatch';

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
          <Route path="/tutorial-styled" element={<TutorialStyled />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/pagination/paginationCreate" element={<PaginationCreate />} />
          <Route path="/pagination/paginationPatch" element={<PaginationPatch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default hot(App);
