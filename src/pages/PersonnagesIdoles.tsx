import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PersonnagesIdoles() {
  const [selectedIdole, setSelectedIdole] = useState(null);

  const idoles = [
    {
      id: 1,
      nom: "Marie Curie",
      photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      description: "Pionnière en physique et chimie, première femme à recevoir le prix Nobel",
      details: `Marie Curie est une physicienne et chimiste polonaise naturalisée française. 
                Elle a mené des recherches pionnières sur la radioactivité et découvert deux 
                éléments : le polonium et le radium. Elle reste à ce jour la seule femme à 
                avoir reçu deux prix Nobel dans des domaines scientifiques.`
    },
    {
      id: 2,
      nom: "Nelson Mandela",
      photo: "https://images.unsplash.com/photo-1557844681-b0da6a516dc9",
      description: "Symbole de la lutte contre l'apartheid et de la réconciliation",
      details: `Nelson Mandela fut un révolutionnaire et homme d'État sud-africain qui a 
                consacré sa vie à la lutte contre l'apartheid. Emprisonné pendant 27 ans, 
                il est devenu le premier président noir d'Afrique du Sud et un symbole 
                mondial de la paix et de la réconciliation.`
    },
    {
      id: 3,
      nom: "Albert Einstein",
      photo: "https://images.unsplash.com/photo-1621252179027-94459d278660",
      description: "Physicien visionnaire qui a révolutionné notre compréhension de l'univers",
      details: `Albert Einstein est considéré comme l'un des plus grands physiciens de tous 
                les temps. Sa théorie de la relativité a révolutionné notre compréhension 
                de l'espace, du temps et de la gravité. Son équation E=mc² est devenue 
                un symbole de la science moderne.`
    },
    // Added more idoles for scrolling demonstration
    {
      id: 4,
      nom: "Frida Kahlo",
      photo: "https://images.unsplash.com/photo-1590686349966-2d35ff9c565d",
      description: "Artiste mexicaine iconique, symbole de résilience et de créativité",
      details: `Frida Kahlo est une artiste peintre mexicaine connue pour ses autoportraits 
                et ses œuvres inspirées de la nature et de la culture mexicaine. Sa vie 
                marquée par la souffrance physique et émotionnelle a nourri son art 
                unique et puissant.`
    }
  ];

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
                style={{ cursor: 'pointer' }}
              >
                <Row className="g-0">
                  <Col xs={4}>
                    <Card.Img 
                      src={idole.photo} 
                      alt={idole.nom}
                      style={{ height: '100%', objectFit: 'cover' }}
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
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="h3 mb-3">{selectedIdole.nom}</Card.Title>
                <Card.Text style={{ whiteSpace: 'pre-line' }}>
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