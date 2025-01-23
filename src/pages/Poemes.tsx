import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import poemes from "../data/poemesData";

function Poemes() {
  const [selectedPoeme, setSelectedPoeme] = useState(null);

  return (
    <Container className="content-section">
      <h1 className="text-center mb-5">Mes Poèmes</h1>
      <Row>
        <Col md={6}>
          <div className="scrollable-section">
            {poemes.map((poeme) => (
              <Card
                key={poeme.id}
                className="mb-4 shadow-sm"
                onClick={() => setSelectedPoeme(poeme)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <Card.Title>{poeme.titre}</Card.Title>
                  <Card.Text style={{ whiteSpace: "pre-line" }}>
                    {poeme.extrait}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
        <Col md={6}>
          {selectedPoeme ? (
            <Card className="details-panel">
              <Card.Body>
                <Card.Title className="h3 mb-3">
                  {selectedPoeme.titre}
                </Card.Title>
                <div className="mb-4">
                  <h5>Poème Complet</h5>
                  <Card.Text style={{ whiteSpace: "pre-line" }}>
                    {selectedPoeme.contenu}
                  </Card.Text>
                </div>
                <div>
                  <h5>Analyse</h5>
                  <Card.Text>{selectedPoeme.analyse}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center text-muted mt-5">
              <h3>Sélectionnez un poème pour voir plus de détails</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Poemes;
