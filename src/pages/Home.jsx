import React from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row text-light p-5 min-vh-100" id="hero">
        <div className="col text-center">
          <Button variant="outline" className="rounded-pill mt-5 purple-button">
            <i class="bi bi-fingerprint me-2"></i>Primary 2026 More
          </Button>
          <h1 className="mt-5 twoPointFive-text text-gradient fw-bolder">
            The Main Title<br></br>for the Weeb
          </h1>
          <h2 className="mt-4 fs-4 text-secondary">
            The subtitle for the main title
          </h2>
          <div className="mt-5">
            <Button className="me-2 purple-gradient-button">Button 1</Button>
            <Button
              className="ms-2 outline-home-button"
              variant="outline-light"
            >
              Button 2
            </Button>
          </div>
          <i class="bi bi-browser-edge larger-icon"></i>
        </div>
      </div>
    </div>
  );
}
