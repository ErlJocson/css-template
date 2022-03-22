import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavigationBar>
      <TitleLink to="/">Home</TitleLink>
      <MyLink to="/cards">Cards</MyLink>
    </NavigationBar>
  );
}

export default Navigation;

const MyLink = styled(Link)`
  margin: 20px 0 0 20px;
  text-decoration: none;
  color: white;
`;

const TitleLink = styled(MyLink)`
  font-size: 20px;
`;

const NavigationBar = styled.nav`
  background-color: gray;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
`;
