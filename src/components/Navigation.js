import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <NavigationBar>
        <TitleLink to="/">Home</TitleLink>
        <MyLink to="/container">Container</MyLink>
        <MyLink to="/cards">Cards</MyLink>
        <MyLink to="/shadow">Shadow</MyLink>
        <MyLink to="/button">Button</MyLink>
      </NavigationBar>
    </>
  );
}

export default Navigation;

const MyLink = styled(Link)`
  margin: 6px 20px 0 20px;
  text-decoration: none;
  color: white;
  padding: 10px;
  transition: all 500ms ease;
  letter-spacing: 2px;
  &:hover {
    background-color: rgb(76, 76, 95);
    border-radius: 10px;
  }
`;

const TitleLink = styled(MyLink)`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavigationBar = styled.nav`
  background-color: rgb(79, 79, 248);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
`;
