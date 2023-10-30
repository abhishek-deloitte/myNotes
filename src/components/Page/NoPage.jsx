import React from "react";
import "./NoPage.css";
import { Container, Row, Col } from "react-bootstrap";

const NoPage = () => {
  return (
    <>
    <Container className="not-found-container">
      <Row className="align-items-center text-center">
        <Col>
          <h1>404</h1>
          <p>Page Not Found</p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default NoPage;
