import React from "react";
import { Container, Row, Col, Alert, Accordion } from "react-bootstrap";

export default function Content1() {
  return (
    <Container fluid>
      <Container className="text-light">
        <Row>
          <Col>
            <h1>Getting started</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Overview</h2>
            <p>Some text.</p>
            <ul>
              <li>Info 1</li>
              <li>Info 2</li>
            </ul>
            <p>More text.</p>
            <p>More text.</p>
            <p>And more text.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Browser Support</h2>
            <p>Text</p>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Trying Vite Online</h2>
            <p>Some text.</p>
            <p>Some table intro.</p>
            <table>
              <thead>
                <tr>
                  <th>JavaScript</th>
                  <th>TypeScript</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Scaffolding your First Project</h2>
            <p>Follow the instructions</p>
            <div data-bs-theme="dark">
              <Alert variant="primary">
                <Alert.Heading>Important Note</Alert.Heading>
                <p>Some info that's really important.</p>
              </Alert>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Some final text</h2>
            <p>Text</p>
            <p>Text</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
