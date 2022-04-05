import Container from "./components/Container.js";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";
import CodeContainer from "./components/CodeContainer.js";

import styled from "styled-components";

function Shadow() {
  return (
    <Container>
      <Header>Shadows</Header>
      <main>
        <Sections>
          <p>
            To add shadows, set class equal to "shadow" , "light-shadow", or
            "dark-shadow".
          </p>
        </Sections>
        <Sections>
          <CardDemo>
            <SampleCard className="shadow">With shadow</SampleCard>
            <SampleCard className="light-shadow">Light shadow</SampleCard>
            <SampleCard className="dark-shadow">Dark shadow</SampleCard>
          </CardDemo>
        </Sections>
        <Sections>
          <p>
            Download the CSS code and set the class of your &lt;div&gt; like the
            following:
          </p>
          <CodeContainer>
            <pre>&lt;div class="shadow"&gt; With Shadow&lt;/div&gt;</pre>
            <pre>&lt;div class="light-shadow"&gt; With Shadow&lt;/div&gt;</pre>
            <pre>&lt;div class="dark-shadow"&gt; With Shadow&lt;/div&gt;</pre>
          </CodeContainer>
          <p>to add shadows to you project.</p>
        </Sections>
        <Sections>
          Download the code{" "}
          <a
            href="https://github.com/ErlJocson/CSS-Templates"
            target={"_blank"}
            rel="noreferrer"
          >
            here!
          </a>
        </Sections>
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

  @media screen and (max-width: 720px) {
    margin: 5px;
    font-size: 12px;
    height: 60px;
  }
`;

const CardDemo = styled.div`
  display: flex;
  justify-content: center;
`;
