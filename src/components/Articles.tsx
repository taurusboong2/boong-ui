import React from 'react';
import styled from 'styled-components';

const Articles = ({ total, page, setPage }) => {
  const numPage = total / 10;

  return (
    <>
      <PageBtn>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ←
        </Button>
        {/* {Array(numPage)
          .fill()
          .map((_, i) => (
            <Button key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Button>
          ))} */}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPage}>
          →
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
