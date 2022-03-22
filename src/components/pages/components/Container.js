import React from "react";
import styled from "styled-components";

function Container(props) {
  return <MyContainer>{props.children}</MyContainer>;
}

export default Container;

const MyContainer = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  min-height: 100vh;
`;
