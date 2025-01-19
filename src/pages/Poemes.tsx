import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Poemes() {
  const [selectedPoeme, setSelectedPoeme] = useState(null);

  const poemes = [
    {
      id: 1,
      titre: "L'Aube Nouvelle",
      extrait: `Dans la brume du matin,
                Les rêves s'éveillent enfin...`,
      contenu: `Dans la brume du matin,
                Les rêves s'éveillent enfin.
                Sur les ailes de l'aurore,
                L'espoir renaît encore.
                
                Chaque rayon de lumière
                Dessine sur la terre
                Une promesse nouvelle
                D'une journée plus belle.`,
      analyse: `Ce poème explore le thème du renouveau et de l'espoir. 
                L'aube représente un nouveau départ, une renaissance quotidienne 
                où tous les possibles sont permis. La progression de la lumière 
                symbolise l'éveil de la conscience et des opportunités.`
    },
    {
      id: 2,
      titre: "Silence",
      extrait: `Dans le calme de la nuit,
                Mes pensées se déploient sans bruit...`,
      contenu: `Dans le calme de la nuit,
                Mes pensées se déploient sans bruit.
                Comme des étoiles silencieuses,
                Elles brillent, mystérieuses.
                
                Le temps suspend son vol,
                Dans ce moment si fol,
                Où l'âme contemplative
                Devient plus sensible.`,
      analyse: `Une méditation sur le silence et l'introspection. 
                La nuit devient un espace de réflexion où les pensées, 
                comparées aux étoiles, prennent leur véritable dimension. 
                Le calme extérieur permet une exploration intérieure plus profonde.`
    },
    // Added more poems for scrolling demonstration
    {
      id: 3,
      titre: "Les Saisons de l'Âme",
      extrait: `Comme les saisons qui passent,
                Mon âme se transforme et s'enlace...`,
      contenu: `Comme les saisons qui passent,
                Mon âme se transforme et s'enlace.
                Au printemps de mes espoirs,
                Je renais chaque soir.
                
                L'été de mes passions brûle,
                Tandis que mon cœur ondule,
                Entre les vagues de la vie,
                Et les rêves infinis.`,
      analyse: `Une réflexion sur les cycles de la vie et les transformations 
                intérieures. Les saisons servent de métaphore pour illustrer 
                les différentes phases de notre évolution personnelle.`
    }
  ];

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
                style={{ cursor: 'pointer' }}
              >
                <Card.Body>
                  <Card.Title>{poeme.titre}</Card.Title>
                  <Card.Text style={{ whiteSpace: 'pre-line' }}>
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
                <Card.Title className="h3 mb-3">{selectedPoeme.titre}</Card.Title>
                <div className="mb-4">
                  <h5>Poème Complet</h5>
                  <Card.Text style={{ whiteSpace: 'pre-line' }}>
                    {selectedPoeme.contenu}
                  </Card.Text>
                </div>
                <div>
                  <h5>Analyse</h5>
                  <Card.Text>
                    {selectedPoeme.analyse}
                  </Card.Text>
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