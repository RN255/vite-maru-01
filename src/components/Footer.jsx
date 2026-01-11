import React from "react";
import { Container } from "react-bootstrap";

export default function Footer({ mode }) {
  const bgClass = mode === "black" ? "bg-black" : "bg-body";
  const textClass = mode === "black" ? "text-light" : "text-body";

  return (
    <Container
      fluid
      className={`${bgClass} py-5`}
      data-bs-theme={mode === "dark" ? "dark" : undefined}
    >
      <Container>
        <footer>
          <ul
            className={`nav justify-content-center bottom-border-faded pb-3 mb-3 ${textClass}`}
          >
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${textClass}`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${textClass}`}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${textClass}`}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${textClass}`}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${textClass}`}>
                About
              </a>
            </li>
          </ul>
          <p className={`text-center ${textClass}`}>&copy; 2025 Company, Inc</p>
        </footer>
      </Container>
    </Container>
  );
}
