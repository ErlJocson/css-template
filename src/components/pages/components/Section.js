import React from "react";
import styled from "styled-components";

function Section(props) {
  return <Sections>{props.children}</Sections>;
}

export default Section;

const Sections = styled.section`
  margin: 15px 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;
