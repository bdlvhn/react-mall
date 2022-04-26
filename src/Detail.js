import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
`;

const Detail = ({ data, stock, setStock }) => {
  const { id } = useParams();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const foundItem = data.filter((row) => parseInt(row.id) === parseInt(id))[0];
  return (
    <div className="container">
      <Box>
        <Title className="red">안뇽</Title>
      </Box>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {input}
      {open && (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다!</p>
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img src={`/images/image0${parseInt(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundItem.title}</h4>
          <p>{foundItem.content}</p>
          <p>{foundItem.price}</p>
          <Stock id={id} stock={stock}></Stock>
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

const Stock = ({ stock, id }) => {
  return <p>재고 : {stock[id]}</p>;
};

export default Detail;
