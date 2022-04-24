import React from 'react';
import { useParams, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Articles = ({ page, setPage, pageSize, numPage, pageList }) => {
  const { search } = useLocation();

  console.log(search);

  const currentPage = search === `?page=${page}&pageSize=${pageSize}`;

  const goPage = number => {
    setPage(number);
  };

  return (
    <>
      <PageBtn>
        <Button onClick={() => setPage(1)} disabled={page === 1}>
          ←←
        </Button>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ←
        </Button>
        <PageUl className="pagination">
          {pageList.map(number => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => setPage(number)} className="page-link">
                <NavLink
                  onClick={goPage}
                  to={`?page=${page}&pageSize=${pageSize}`}
                  style={{ color: currentPage ? 'white' : '#fff', backgroundColor: currentPage ? '#263a6c' : '' }}>
                  {number}
                </NavLink>
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
        <Button onClick={() => setPage(page + 1)} disabled={page === numPage}>
          →
        </Button>
        <Button onClick={() => setPage(numPage)} disabled={page === numPage}>
          →→
        </Button>
      </PageBtn>
    </>
  );
};

export default Articles;

const PageBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin: 10px;
`;

const Button = styled.button`
  padding: 5px;
  margin: 0;
  background: black;
  color: white;
  font-size: 15px;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }

  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  min-width: 10px;
  min-height: 10px;

  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
