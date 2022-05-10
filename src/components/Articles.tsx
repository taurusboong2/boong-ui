import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface currentPageType {
  startIndex: number;
  endIndex: number;
}

type Props = any; // 형이 직접 고치지

const Articles: FC<Props> = ({ page, setPage, pageSize, numPage, totalArticles, pageValue }) => {
  const pageList: number[] = [];

  for (let i = 1; i <= Math.ceil(totalArticles / pageSize); i++) {
    // useMemo 사용해서 고치기
    pageList.push(i);
  }

  const [currentPage, setCurrentPage] = useState<currentPageType>({
    startIndex: 0,
    endIndex: 10,
  });

  const [pageLimit, setPageLimit] = useState(10);

  const goPage = number => {
    setPage(number);

    if (number + 1 > currentPage.endIndex) {
      setCurrentPage({
        endIndex: currentPage.endIndex + pageLimit,
        startIndex: currentPage.startIndex + pageLimit,
      });
    } else if ((number - 1) % pageLimit == 0) {
      setCurrentPage({
        endIndex: currentPage.endIndex - pageLimit,
        startIndex: currentPage.startIndex - pageLimit,
      });
    }
  };

  const nextBtnClick = () => {
    setPage(Number(pageValue) + 1);

    if (page + 1 > currentPage.endIndex) {
      setCurrentPage({
        endIndex: currentPage.endIndex + pageLimit,
        startIndex: currentPage.startIndex + pageLimit,
      });
    }
  };

  const prevBtnClick = () => {
    setPage(Number(pageValue) - 1);

    if ((page - 1) % pageLimit == 0) {
      setCurrentPage({
        endIndex: currentPage.endIndex - pageLimit,
        startIndex: currentPage.startIndex - pageLimit,
      });
    }
  };

  const firstBtnClick = () => {
    setPage(1);

    setCurrentPage({
      ...currentPage,
      endIndex: 10,
      startIndex: 0,
    });
  };

  const lastBtnClick = () => {
    setPage(numPage);

    setCurrentPage({
      ...currentPage,
      endIndex: pageList.length,
      startIndex: pageList.length - pageLimit,
    });
  };

  const pageNumberList = pageList.map(number => {
    if (number < currentPage.endIndex + 1 && number > currentPage.startIndex) {
      return (
        <PageLi key={number} className="page-item">
          <PageSpan onClick={() => setPage(number)} className={page === number ? 'page-link active' : 'page-link'}>
            <Link onClick={goPage} to={`?page=${number}&pageSize=${pageSize}`}>
              {number}
            </Link>
          </PageSpan>
        </PageLi>
      );
    } else {
      return;
    }
  });

  return (
    <>
      <PageBtn>
        <Button onClick={firstBtnClick} disabled={page === 1}>
          ←←
        </Button>
        <Button onClick={prevBtnClick} disabled={page === 1}>
          ←
        </Button>
        <PageUl className="pagination">
          {pageList.slice(currentPage.startIndex, currentPage.endIndex).map(number => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => setPage(number)} className={page === number ? 'page-link active' : 'page-link'}>
                <Link onClick={goPage} to={`?page=${number}&pageSize=${pageSize}`}>
                  {number}
                </Link>
              </PageSpan>
            </PageLi>
          ))}
          {pageNumberList}
        </PageUl>
        <Button onClick={nextBtnClick} disabled={page === numPage}>
          →
        </Button>
        <Button onClick={lastBtnClick} disabled={page === numPage}>
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
  .active {
    padding: 0 3px;
    border-radius: 5px;
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  /* min-width: 10px;
  min-height: 10px; */

  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }

  a {
    width: 10px;
    height: 10px;
    /* border-radius: 50%; */

    &:active,
    &:focus {
      padding: 0 3px;
      border-radius: 5px;
      color: white;
      background-color: #263a6c;
    }
  }
`;
