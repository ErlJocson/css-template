import React from "react";
import styled from "styled-components";

function Sections(props) {
  return <Section>{props.children}</Section>;
}

export default Sections;

const Section = styled.section`
  margin: 15px 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: gray;
`;
