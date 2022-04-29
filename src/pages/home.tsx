import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../home.module.scss';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    navigate(
      {
        pathname: location.pathname,
        search: '?sort=date&order=newest',
      },
      {
        replace: true,
      }
    );
  }, []);

  return (
    <div className="home">
      <h2 className="title">Home page</h2>
      <Link to="tutorial">Btn 튜토리얼</Link>
      <Link to="tutorial-styled">Btn 튜토리얼(styled) </Link>
      <Link to="pagination">Pagination</Link>
    </div>
  );
};

export default Home;
