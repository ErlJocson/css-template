import React from "react";
import styled from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header.js";
import Sections from "./components/Sections";

function Home() {
  return (
    <Container>
      <Header>Main page</Header>
      <MainContent>
        <Sections>
          <h1>CSS Templates</h1>
          <p>Try my CSS templates to help you build websites faster</p>
        </Sections>
        <Sections>
          <h1>Cards</h1>
          <p>Use this code snippets for building simple cards</p>
        </Sections>
        <Sections>
          <h1>Containers</h1>
          <p>Use this code snippets for building container</p>
        </Sections>
      </MainContent>
    </Container>
  );
}

export default Home;

const MainContent = styled.main``;
