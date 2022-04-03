import React from "react";
import styled from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Sections from "./components/Section";

function Background() {
  return (
    <Container>
      <Header>Background Color</Header>
      <main>
        <Sections>
          <p>Use this template to add background colors in your project.</p>
        </Sections>

        <Sections>
          <BackcolorDemo className="bg-blue">class="bg-blue"</BackcolorDemo>
          <BackcolorDemo className="bg-red">class="bg-red"</BackcolorDemo>
          <BackcolorDemo className="bg-gray">class="bg-gray"</BackcolorDemo>
          <BackcolorDemo className="bg-black">class="bg-black"</BackcolorDemo>
        </Sections>
        <Sections>
          <p>
            Download the code{" "}
            <a
              href="https://github.com/ErlJocson/Code-Snippets"
              target={"_blank"}
            >
              here.
            </a>
          </p>
        </Sections>
      </main>
    </Container>
  );
}

export default Background;

const BackcolorDemo = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  color: white;
`;
