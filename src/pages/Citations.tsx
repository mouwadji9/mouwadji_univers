import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Citations() {
  const citations = [
    {
      texte: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
      auteur: "Gandhi"
    },
    {
      texte: "Le plus grand voyageur n'est pas celui qui a fait dix fois le tour du monde, mais celui qui a fait une seule fois le tour de lui-même.",
      auteur: "Gandhi"
    },
    {
      texte: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
      auteur: "Confucius"
    },
    // Added more citations for scrolling demonstration
    {
      texte: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      auteur: "Steve Jobs"
    },
    {
      texte: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
      auteur: "Winston Churchill"
    },
    {
      texte: "La créativité, c'est l'intelligence qui s'amuse.",
      auteur: "Albert Einstein"
    }
  ];

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