import React from 'react';
import { Link } from 'react-router-dom';
import '../home.module.scss';

const Home = () => {
  return (
    <div className="home">
      <h2 className="title">Home page</h2>
      <Link to="tutorial">Btn 튜토리얼</Link>
    </div>
  );
};

export default Home;
