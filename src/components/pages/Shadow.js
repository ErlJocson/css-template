import React from "react";

import Container from "./components/Container.js";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";

function Shadow() {
  return (
    <Container>
      <Header>Shadows</Header>
      <main>
        <Sections>
          <h3>This is how to add shadows</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            enim, commodi consectetur minima iure quibusdam error debitis
            assumenda hic, sequi vel fugiat sit iste accusamus. Provident
            dolores fugiat sunt in.
          </div>
        </Sections>
      </main>
    </Container>
  );
}

export default Shadow;
