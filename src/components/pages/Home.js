import React from "react";

import Container from "./components/Container";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";
import pages from "./data/MyPages.js";

function Home() {
  return (
    <Container>
      <Header>Basic CSS Templates</Header>
      <main>
        {pages.map((page, i) => {
          return (
            <Sections key={i}>
              <h1>{page.title}</h1>
              <p>{page.paragraph}</p>
              <a href={page.link}>View source code</a>
            </Sections>
          );
        })}
      </main>
    </Container>
  );
}

export default Home;
