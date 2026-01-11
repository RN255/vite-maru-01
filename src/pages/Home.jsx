import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home({ setTheme, setNavbarMode }) {
  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    setNavbarMode("black");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.33 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="black-bg overflow-x-hidden">
      <Row className="text-light p-5 min-vh-100" id="hero">
        <Col className="text-center">
          <Button
            variant="outline"
            className="rounded-pill mt-5 purple-button fade-in-1s"
          >
            <i className="bi bi-fingerprint me-2"></i>Primary 2026 More
          </Button>
          <h1 className="mt-5 twoPointFive-text text-gradient fw-bolder fade-in-2s">
            The Main Title<br></br>for the Web
          </h1>
          <h2 className="mt-4 fs-4 text-secondary fade-in-3s">
            The subtitle for the main title
          </h2>
          <div className="mt-5 fade-in-4s">
            <Button
              className="me-2 purple-gradient-button"
              as={Link}
              to="/content1"
            >
              Content 1
            </Button>
            <Button className="ms-2 outline-home-button">Button 2</Button>
          </div>
          <div className="relative">
            <i className="bi bi-browser-edge larger-icon d-inline-block relative z2 fade-in-6s"></i>
            <div className="animate-laser1"></div>
            <div className="animate-laser2"></div>
            <div className="animate-laser3"></div>
            <div className="animate-laser4"></div>
          </div>
          <h2 className="two-text blue-white-text-gradient">
            Redefining your experiences
          </h2>
          <h3 className="fs-4">We are trying to make this simple again</h3>
        </Col>
      </Row>
      <Container>
        <Row className="black-bg">
          <Col lg="6" className="mb-4 reveal reveal-from-left">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light">
                <blockquote className="blockquote mb-4 p-3 rounded blockquote-custom-green">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <Card.Title>This is some text within a card body.</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4 reveal reveal-from-right">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light">
                <blockquote className="blockquote mb-4 p-3 rounded blockquote-custom-blue h-50">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-light">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="black-bg">
          <Col lg="6" className="mb-4 reveal reveal-from-left">
            <Card className="custom-dark-card h-100 white-shadow-hover">
              <Card.Body className="text-light align-content-center">
                <div className="d-flex justify-content-around mb-4">
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                </div>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4 reveal reveal-from-right">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light text-center">
                <i className="bi bi-browser-edge custom-card-icon-large"></i>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center">
            <i className="bi bi-browser-edge text-light custom-card-icon-large"></i>
            <h3 className="fs-1 text-gradient-purple">
              A new foundation to build on
            </h3>
          </Col>
        </Row>
        <Row className="black-bg">
          <Col lg="6" className="mb-4 reveal reveal-from-left">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light">
                <blockquote className="blockquote mb-4 p-3 rounded blockquote-custom-green">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <Card.Title>This is some text within a card body.</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4 reveal reveal-from-right">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light">
                <blockquote className="blockquote mb-4 p-3 rounded blockquote-custom-blue h-50">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-light">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="black-bg">
          <Col lg="6" className="mb-4 reveal reveal-from-left">
            <Card className="custom-dark-card h-100 white-shadow-hover">
              <Card.Body className="text-light align-content-center">
                <div className="d-flex justify-content-around mb-4">
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                  <i className="bi bi-browser-edge rounded icon-custom-border-styling"></i>
                </div>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4 reveal reveal-from-right ">
            <Card className="custom-dark-card white-shadow-hover">
              <Card.Body className="text-light text-center">
                <i className="bi bi-browser-edge custom-card-icon-large"></i>
                <Card.Title className="text-center">
                  This is some text within a card body.
                </Card.Title>
                <Card.Text className="text-secondary text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row className="my-5">
        <Col className="text-center">
          <h3 className="text-light fs-1">
            Powering your favourite frameworks and tools
          </h3>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="text-light d-flex move-left justify-content-center overflow-visible">
          <i className="bi bi-browser-edge text-black rounded icon-custom-border-styling me-4"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge text-black rounded icon-custom-border-styling"></i>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col className="text-light d-flex move-right justify-content-center overflow-visible">
          <i className="bi bi-browser-edge text-black rounded icon-custom-border-styling me-4"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge rounded icon-custom-border-styling me-4 red-shadow-on-hover"></i>
          <i className="bi bi-browser-edge text-black rounded icon-custom-border-styling"></i>
        </Col>
      </Row>
    </Container>
  );
}
