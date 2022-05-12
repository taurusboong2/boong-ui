import React, { FC, useEffect, useMemo } from 'react';
import { Link, useSearchParams, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import Articles from '../components/Articles';
import { useArticleList } from '../hooks/article.hook';
import styled from 'styled-components';

const Pagination: FC = () => {
  // router dom
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pageSize = searchParams.get('pageSize') || undefined;
  const page = searchParams.get('page') || undefined;

  const { articlesData, totalSize } = useArticleList(page, pageSize);

  const numPage = useMemo(() => {
    if (!totalSize || !pageSize) return 0;
    return Math.ceil(totalSize / parseInt(pageSize));
  }, [totalSize, pageSize]);

  useEffect(() => {
    if (pageSize && page) {
      return;
    }
    navigate(
      {
        pathname: location.pathname,
        search: `?${createSearchParams({
          page: '1',
          pageSize: '10',
        })}`,
      },
      {
        replace: true,
      }
    );
  }, [page, pageSize, totalSize]);

  const onHandlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newSize = e.currentTarget.value;
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams({
        page: '1',
        pageSize: newSize,
      })}`,
    });
  };

  const onHandlePageChange = (newPage: number) => {
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams({
        page: newPage + '',
        pageSize: pageSize as string,
      })}`,
    });
  };

  if (!articlesData) {
    return <div>로딩중..</div>;
  } else if (!pageSize) {
    return <>페이지 사이즈 오류</>;
  }

  return (
    <Wrap>
      <header>Article List</header>

      <Button onClick={() => navigate('/')}>HOME</Button>

      <Link to="/pagination/paginationCreate">
        <CreateBtn>CREATE</CreateBtn>
      </Link>

      <select typeof="number" value={pageSize} onChange={onHandlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <Main>
        {articlesData.map((e, i): any => {
          return (
            <ArticleList key={i}>
              <Link to={{ pathname: `/detail/${e.id}` }}>
                <p>{e.id}</p>
                <h3>{e.attributes.title}</h3>
              </Link>
            </ArticleList>
          );
        })}
      </Main>

      <Articles
        page={page}
        setPage={onHandlePageChange}
        pageSize={pageSize}
        numPage={numPage}
        totalArticles={totalSize}
      />
    </Wrap>
  );
};

export default Pagination;

const Wrap = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  header {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
  }
`;

const Main = styled.div`
  width: 100%;
  background-color: #e2e2e2;
`;

const ArticleList = styled.div`
  a {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  min-width: 150px;
  min-height: 20px;
  margin: 10px 0;
  cursor: pointer;
`;

const CreateBtn = styled(Button)``;
