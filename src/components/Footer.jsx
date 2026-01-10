import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="black-bg">
      <Container>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center bottom-border-faded pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-light">&copy; 2025 Company, Inc</p>
        </footer>
      </Container>
    </Container>
  );
}
