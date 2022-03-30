import React from "react";
import styled from "styled-components";

function Container(props) {
  return <MyContainer>{props.children}</MyContainer>;
}

export default Container;

const MyContainer = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  min-height: calc(100vh - 10px);

  @media screen and (max-width: 720px) {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
`;
