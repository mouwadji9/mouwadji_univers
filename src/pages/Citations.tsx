import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import citations from "../data/citations";

function Citations() {
  return (
    <Container className="content-section">
      <h1 className="text-center mb-5">Citations Inspirantes</h1>
      <Row className="scrollable-section">
        {citations.map((citation, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <div className="quote-card">
              <blockquote className="mb-0">
                <p className="mb-3">{citation.texte}</p>
                <footer className="blockquote-footer">
                  <cite title="Source">{citation.auteur}</cite>
                </footer>
              </blockquote>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Citations;
