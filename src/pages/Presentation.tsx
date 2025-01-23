import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Presentation() {
  return (
    <>
      <div className="hero-section text-center bg-dark text-white py-5">
        <Container>
          <h1 className="display-4 mb-4 animate__animated animate__fadeIn">
            Bienvenue sur <span className="text-info">Mouwadji_Univers</span>
          </h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
            Un espace où je partage mes passions, mes pensées et mes aventures
          </p>
          <p className="text-light">- mouwadji -</p>
        </Container>
      </div>

      <Container className="content-section py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <h2 className="mb-4 text-center">À Propos de Moi</h2>
            <p className="lead text-center">
              Passionné par la vie et ses multiples facettes, je suis un
              développeur sénégalais résidant au Canada. Mon parcours m'a amené
              à explorer des domaines variés comme le codage, la psychologie, et
              l'islam, tout en cultivant une grande curiosité pour le monde qui
              m'entoure.
            </p>
            <p className="text-center text-muted">
              Je partage ici mes réflexions, mes aventures et mes découvertes à
              travers différentes rubriques :
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3">
                🎯 <strong>Citations</strong> - Des mots qui inspirent et font
                réfléchir, alimentant ma quête de sagesse et d'inspiration.
              </li>
              <li className="mb-3">
                📝 <strong>Poèmes</strong> - L'expression de mes émotions en
                vers, un moyen de capturer l'instant et d'explorer l'âme
                humaine.
              </li>
              <li className="mb-3">
                📸 <strong>Photos et Aventures</strong> - Mes explorations du
                monde, à la fois virtuelles et réelles, à travers l'objectif de
                mon appareil photo.
              </li>
              <li className="mb-3">
                👥 <strong>Personnages et Idoles</strong> - Ceux qui m'inspirent
                et influencent ma vision du monde, de l'art et de la vie.
              </li>
              <li className="mb-3">
                🧠 <strong>Psychologie</strong> - Mes études et réflexions sur
                l'esprit humain, un domaine qui me fascine profondément.
              </li>
              <li className="mb-3">
                🌍 <strong>Développement Personnel</strong> - Mon cheminement
                vers une meilleure version de moi-même, avec un accent sur la
                discipline, la foi et l'amélioration continue.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Presentation;
