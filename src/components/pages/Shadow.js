import Container from "./components/Container.js";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";

import styled from "styled-components";

function Shadow() {
  return (
    <Container>
      <Header>Shadows</Header>
      <main>
        <Sections>
          <p>
            To add shadows, set class equal to shadow , light-shadow, or
            dark-shadow
          </p>
        </Sections>
        <Sections>
          <CardDemo>
            <SampleCard className="shadow">With shadow</SampleCard>
            <SampleCard className="light-shadow">Light shadow</SampleCard>
            <SampleCard className="dark-shadow">Dark shadow</SampleCard>
          </CardDemo>
        </Sections>
        <Sections></Sections>
      </main>
    </Container>
  );
}

export default Shadow;

const SampleCard = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

const CardDemo = styled.div`
  display: flex;
  justify-content: center;
`;
