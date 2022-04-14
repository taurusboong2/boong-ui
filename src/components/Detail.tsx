import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Detail = ({ match: any }) => {
  const [detailData, setDetailData] = useState([]);
  const id = match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:1337/api/articles/${id}`).then(res => {
      setDetailData(res.data);
    });
  }, []);

  console.log(id);
  console.log(detailData);

  return (
    <>
      <Header>Detail</Header>
    </>
  );
};

export default Detail;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;
