import React from "react";
import styled from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";

function Home() {
  return (
    <Container>
      <Header>Basic CSS Templates</Header>
      <main>
        <Sections>
          <p>
            This is my personal css template. Try to use this to quickly develop
            your websites.
          </p>
        </Sections>
        <List className="light-shadow">
          <h3>The CSS template includes:</h3>
          <ul>
            <li>Background Color</li>
            <li>Cards</li>
            <li>Shadow</li>
            <li>Button</li>
          </ul>
        </List>
        <Sections>
          <p>
            Clone the github repository{" "}
            <a
              href="https://github.com/ErlJocson/Code-Snippets"
              target={"_blank"}
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </Sections>
      </main>
    </Container>
  );
}

export default Home;

const List = styled.div`
  margin: 15px 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  ul {
    margin: 10px;
    li {
      margin: 10px;
    }
  }
`;
