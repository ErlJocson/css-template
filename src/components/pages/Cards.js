import React from "react";
import Container from "./components/Container";
import Header from "./components/Header.js";
import Sections from "./components/Section.js";
import CodeContainer from "./components/CodeContainer";

function Cards() {
  return (
    <Container>
      <Header>Cards</Header>
      <main>
        <Sections>
          <p>Use this templates to add cards in your project</p>
        </Sections>
        <Sections>
          <div className="card-container">
            <div className="card bg-blue">
              <div className="card-header">Card 1</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
            <div className="card bg-blue">
              <div className="card-header">Card 2</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
            <div className="card bg-blue">
              <div className="card-header">Card 3</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
        </Sections>
        <Sections>
          <p>Download the CSS code and use this template:</p>
          <CodeContainer>
            <pre>
              &lt;div class="card-container"&gt;
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 1&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 2&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 3&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              &lt;/div&gt;
            </pre>
          </CodeContainer>
        </Sections>
        <Sections>
          <p>To center the cards add "jc-center".</p>
          <CodeContainer>
            <pre>
              &lt;div class="card-container jc-center"&gt;
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 1&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 2&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              <pre>
                &lt;div class="card bg-blue"&gt;
                <pre>&lt;div class="card-header"&gt;Card 3&lt;/div&gt;</pre>
                <pre>
                  &lt;div class="details"&gt;
                  <pre>&lt;p&gt; some details &lt;/p&gt;</pre>
                  <pre>&lt;a href="#"&gt;Link&lt;/a&gt;</pre>
                  &lt;/div&gt;
                </pre>
                &lt;/div&gt;
              </pre>
              &lt;/div&gt;
            </pre>
          </CodeContainer>
        </Sections>
        <Sections>
          <p>This is the result after adding "jc-center"</p>
          <div className="card-container jc-center">
            <div className="card bg-blue">
              <div className="card-header">Card 1</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
            <div className="card bg-blue">
              <div className="card-header">Card 2</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
            <div className="card bg-blue">
              <div className="card-header">Card 3</div>
              <div className="details">
                <p>Sample details of card</p>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
        </Sections>
        <Sections>
          Download the code{" "}
          <a
            href="https://github.com/ErlJocson/CSS-Templates"
            target={"_blank"}
          >
            here!
          </a>
        </Sections>
      </main>
    </Container>
  );
}

export default Cards;
