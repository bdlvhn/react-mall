import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
`;

const Detail = ({ data }) => {
  const { id } = useParams();
  const history = useHistory();
  console.log("data");
  console.log(data[0]);
  const foundItem = data[0].filter(
    (row) => parseInt(row.id) === parseInt(id)
  )[0];

  return (
    <div className="container">
      <Box>
        <Title className="red">안뇽</Title>
      </Box>
      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다!</p>
      </div>
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다!</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={`/images/image0${parseInt(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundItem.title}</h4>
          <p>{foundItem.content}</p>
          <p>{foundItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
