import React from "react";
import styled from "styled-components";

function Header(props) {
  return <Heading className="shadow">{props.children}</Heading>;
}

export default Header;

const Heading = styled.h1`
  border-radius: 10px;
  margin: 10px 50px;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
  background-color: rgb(113, 149, 196);
  @media screen and (max-width: 720px) {
    & {
      font-size: 18px;
    }
  }
`;
