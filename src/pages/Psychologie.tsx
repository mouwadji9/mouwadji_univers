import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { Brain, Heart, Users, Lightbulb, BookOpen, Scale, Microscope } from 'lucide-react';

function Psychologie() {
  const studies = [
    {
      icon: <Brain size={40} />,
      title: "Psychologie Cognitive",
      content: "Étude des processus mentaux et de la façon dont nous traitons l'information",
      details: [
        "Mémoire et apprentissage",
        "Attention et perception",
        "Résolution de problèmes",
        "Processus de pensée",
        "Développement cognitif",
        "Intelligence artificielle et cognition"
      ]
    },
    {
      icon: <Heart size={40} />,
      title: "Psychologie Émotionnelle",
      content: "Analyse des émotions et leur impact sur le comportement",
      details: [
        "Intelligence émotionnelle",
        "Gestion du stress",
        "Régulation émotionnelle",
        "Thérapie émotionnelle",
        "Impact des émotions sur la santé",
        "Développement émotionnel"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Psychologie Sociale",
      content: "Étude des interactions sociales et des comportements de groupe",
      details: [
        "Dynamiques de groupe",
        "Influence sociale",
        "Communication interpersonnelle",
        "Préjugés et discrimination",
        "Leadership et pouvoir",
        "Comportement collectif"
      ]
    },
    {
      icon: <Scale size={40} />,
      title: "Psychologie Clinique",
      content: "Approches thérapeutiques et traitement",
      details: [
        "Thérapies comportementales",
        "Approches psychodynamiques",
        "Interventions cliniques",
        "Diagnostic et évaluation",
        "Traitement des troubles mentaux",
        "Prévention et intervention précoce"
      ]
    },
    {
      icon: <Microscope size={40} />,
      title: "Recherches Expérimentales",
      content: "Études et expériences menées dans le domaine",
      details: [
        "Méthodologie de recherche",
        "Résultats d'études",
        "Applications pratiques",
        "Neurosciences cognitives",
        "Études longitudinales",
        "Innovations en psychologie"
      ]
    }
  ];

  return (
    <Container className="content-section">
      <h1 className="text-center mb-5">Psychologie</h1>
      <p className="text-center mb-5 lead">
        Exploration approfondie de mes études et recherches en psychologie
      </p>
      
      <div className="scrollable-section">
        <Accordion className="mb-5">
          {studies.map((study, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <span className="me-3 text-primary">{study.icon}</span>
                  <span>{study.title}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p>{study.content}</p>
                <ul className="list-unstyled">
                  {study.details.map((detail, idx) => (
                    <li key={idx} className="mb-2">
                      <BookOpen size={16} className="me-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <Row className="mt-5">
          <Col md={8} className="mx-auto text-center">
            <h2 className="mb-4">Ma Vision de la Psychologie</h2>
            <p className="lead">
              La psychologie est bien plus qu'une science, c'est une exploration continue de l'esprit humain
              et de ses mystères. À travers mes études et recherches, je cherche à comprendre et à partager
              ces connaissances précieuses.
            </p>
            <footer className="blockquote-footer mt-3">
              <cite title="Source">mouwadji</cite>
            </footer>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Psychologie;