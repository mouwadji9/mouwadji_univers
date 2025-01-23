import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import idoles from "../data/idoles";

function PersonnagesIdoles() {
  const [selectedIdole, setSelectedIdole] = useState(null);

  return (
    <Container className="content-section">
      <h1 className="text-center mb-5">Personnages et Idoles</h1>
      <Row>
        <Col md={6}>
          <div className="scrollable-section">
            {idoles.map((idole) => (
              <Card
                key={idole.id}
                className="idol-card mb-4"
                onClick={() => setSelectedIdole(idole)}
                style={{ cursor: "pointer" }}
              >
                <Row className="g-0">
                  <Col xs={4}>
                    <Card.Img
                      src={idole.photo}
                      alt={idole.nom}
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body>
                      <Card.Title>{idole.nom}</Card.Title>
                      <Card.Text>{idole.description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
        <Col md={6}>
          {selectedIdole ? (
            <Card className="details-panel">
              <Card.Img
                variant="top"
                src={selectedIdole.photo}
                alt={selectedIdole.nom}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h3 mb-3">{selectedIdole.nom}</Card.Title>
                <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {selectedIdole.details}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center text-muted mt-5">
              <h3>Sélectionnez un personnage pour voir plus de détails</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PersonnagesIdoles;
