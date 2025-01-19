import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Presentation() {
  return (
    <>
      <div className="hero-section text-center">
        <Container>
          <h1 className="display-4 mb-4">Bienvenue sur Mouwadji_Univers</h1>
          <p className="lead">Un espace où je partage mes passions, mes pensées et mes aventures</p>
          <p className="text-light">- mouwadji -</p>
        </Container>
      </div>
      
      <Container className="content-section">
        <Row>
          <Col md={8} className="mx-auto">
            <h2 className="mb-4">À Propos de Moi</h2>
            <p className="lead">
              Passionné par la vie et ses multiples facettes, je partage ici mes réflexions,
              mes aventures et mes découvertes à travers différentes rubriques :
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3">🎯 <strong>Citations</strong> - Des mots qui inspirent et font réfléchir</li>
              <li className="mb-3">📝 <strong>Poèmes</strong> - L'expression de mes émotions en vers</li>
              <li className="mb-3">📸 <strong>Photos et Aventures</strong> - Mes explorations et découvertes</li>
              <li className="mb-3">👥 <strong>Personnages et Idoles</strong> - Ceux qui m'inspirent</li>
              <li className="mb-3">🧠 <strong>Psychologie</strong> - Mes études et réflexions sur l'esprit humain</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Presentation;