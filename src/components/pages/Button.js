import styled from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header";
import Sections from "./components/Section";
import CodeContainer from "./components/CodeContainer";

function Button() {
  return (
    <Container>
      <Header>Button</Header>
      <main>
        <Sections>
          <p>
            To style buttons in you projects set class equal to "btn-success" or
            "btn-danger".
          </p>
        </Sections>
        <Sections>
          <ButtonDemo>
            <button className="btn-success">btn-success</button>
            <button className="btn-danger">btn-danger</button>
          </ButtonDemo>
        </Sections>
        <Sections>
          <p>
            Download the CSS code and set the class of your &lt;button&gt; like
            the following:
          </p>
          <CodeContainer>
            <pre>
              &lt;button class="btn-success"&gt; btn-success&lt;/button&gt;
            </pre>
            <pre>
              &lt;button class="btn-danger"&gt; btn-danger&lt;/button&gt;
            </pre>
          </CodeContainer>
          <p>to add styles in your project</p>
        </Sections>
        <Sections>
          <p>
            This can also work in &lt;a&gt; and also outputs the same result
          </p>
          <CodeContainer>
            <pre>&lt;a class="btn-success"&gt; btn-success&lt;/a&gt;</pre>
            <pre>&lt;a class="btn-danger"&gt; btn-danger&lt;/a&gt;</pre>
          </CodeContainer>
          <ButtonDemo>
            <a className="btn-success">btn-success</a>
            <a className="btn-danger">btn-danger</a>
          </ButtonDemo>
        </Sections>
        <Sections>
          Download the code
          <a href="https://github.com/ErlJocson/Code-Snippets"> here!</a>
        </Sections>
      </main>
    </Container>
  );
}

export default Button;

const ButtonDemo = styled.div`
  display: flex;
  justify-content: center;

  * {
    margin: 10px;
  }
`;
