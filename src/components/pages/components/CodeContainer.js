import React from "react";
import styled from "styled-components";

function CodeContainer(props) {
  return <Code>{props.children}</Code>;
}

export default CodeContainer;

const Code = styled.div`
  width: 700px;
  margin: 10px auto;
  border: 1px solid black;
  padding: 10px;
  @media screen and (max-width: 1020px) {
    width: 500px;
  }

  @media screen and (max-width: 850px) {
    width: 80%;
    overflow: scroll;
  }
`;
