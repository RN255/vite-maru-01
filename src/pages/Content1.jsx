import { useEffect } from "react";
import { Container, Row, Col, Alert, Accordion, Table } from "react-bootstrap";

export default function Content1({ setTheme, setNavbarMode }) {
  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    setNavbarMode("dark");
  }, []);

  return (
    <Container fluid>
      <Container>
        <Row className="pt-5 pb-4 bottom-border-faded">
          <Col>
            <h1>Getting started</h1>
          </Col>
        </Row>
        <Row className="mt-4 bottom-border-faded pb-4">
          <Col>
            <h2 className="mb-4">Overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                sit amet consectetur adipiscing elit quisque faucibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                sit amet consectetur adipiscing elit quisque faucibus.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
              amet consectetur adipiscing elit quisque faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
              amet consectetur adipiscing elit quisque faucibus.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 bottom-border-faded pb-4">
          <Col>
            <h2 className="mb-4">Browser Support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
              elit quisque faucibus ex sapien vitae pellentesque. Vitae
              pellentesque sem placerat in id cursus mi. Cursus mi pretium
              tellus duis convallis tempus leo. Tempus leo eu aenean sed diam
              urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec
              metus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
              consectetur adipiscing elit quisque faucibus ex sapien. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. Vitae
              pellentesque sem placerat in id cursus mi.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 bottom-border-faded pb-4">
          <Col>
            <h2 className="mb-4">Trying Vite Online</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
              consectetur adipiscing elit quisque faucibus ex sapien. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. Vitae
              pellentesque sem placerat in id cursus mi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <div data-bs-theme="dark">
              <Table striped className="w-auto my-4">
                <thead>
                  <tr>
                    <th className="text-secondary">JavaScript</th>
                    <th className="text-secondary">TypeScript</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 bottom-border-faded pb-5">
          <Col>
            <h2 className="mb-4">Scaffolding your First Project</h2>
            <p>Follow the instructions</p>
            <div data-bs-theme="dark">
              <Alert variant="primary" className="my-4">
                <Alert.Heading>Important Note</Alert.Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </p>
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
        <Row className="mt-4 pb-5">
          <Col>
            <h2 className="mb-4">Some final text</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
