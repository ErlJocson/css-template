import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  const [isShow, toggle] = useState(false);
  return (
    <>
      <NavigationBar show={isShow}>
        <NavigationContents>
          <TitleLink to="/css-template">Home</TitleLink>
          <MyLink to="/cards">Cards</MyLink>
          <MyLink to="/shadow">Shadow</MyLink>
          <MyLink to="/button">Button</MyLink>
        </NavigationContents>
        <MenuIcon
          onClick={() => {
            toggle(!isShow);
          }}
        >
          <Lines />
          <Lines />
          <Lines />
        </MenuIcon>
        <BurgerNav show={isShow}>
          <TitleLink
            onClick={() => {
              toggle(!isShow);
            }}
            to="/css-template"
          >
            Home
          </TitleLink>
          <MyLink
            onClick={() => {
              toggle(!isShow);
            }}
            to="/cards"
          >
            Cards
          </MyLink>
          <MyLink
            onClick={() => {
              toggle(!isShow);
            }}
            to="/shadow"
          >
            Shadow
          </MyLink>
          <MyLink
            onClick={() => {
              toggle(!isShow);
            }}
            to="/button"
          >
            Button
          </MyLink>
        </BurgerNav>
      </NavigationBar>
    </>
  );
}

export default Navigation;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 20px;
  }
`;

const Lines = styled.div`
  height: 2px;
  margin: 2px 0;
  background-color: black;
  width: 20px;
  border-radius: 10px;
`;

const MyLink = styled(Link)`
  margin: 6px 20px 0 20px;
  text-decoration: none;
  color: white;
  padding: 10px;
  transition: all 500ms ease;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:hover {
    background-color: rgb(76, 76, 95);
    border-radius: 10px;
  }
`;

const TitleLink = styled(MyLink)`
  font-size: 20px;
  font-weight: bold;
`;

const NavigationBar = styled.nav`
  background-color: rgb(79, 79, 248);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.show ? "200px" : "40px")};
  }
`;

const NavigationContents = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    & {
      display: none;
    }
  }
`;

const BurgerNav = styled(NavigationContents)`
  display: ${(props) => (props.show ? "flex" : "none")};
`;
