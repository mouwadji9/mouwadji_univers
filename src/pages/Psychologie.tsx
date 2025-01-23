import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Brain, Heart, Users, Scale, Microscope } from "lucide-react";
import "./Psychologie.css";
import studies from "../data/psychologieData";

function Psychologie() {
  const [activeStudy, setActiveStudy] = useState(null);

  const iconMapping = {
    user: <User size={40} />,
    heart: <Heart size={40} />,
    users: <Users size={40} />,
  };

  return (
    <Container className="content-section">
      <Row>
        {/* Sidebar des titres */}
        <Col md={4} className="title-sidebar">
          {studies.map((study, index) => (
            <div
              key={index}
              className={`title-item ${activeStudy === index ? "active" : ""}`}
              onMouseEnter={() => setActiveStudy(index)}
            >
              <div className="d-flex align-items-center">
                <span className="me-3 text-primary">{`study.icon`}</span>
                <span>{study.title}</span>
              </div>
            </div>
          ))}
        </Col>

        {/* Contenu dynamique */}
        <Col md={8} className="details-panel">
          {activeStudy !== null && (
            <div>
              <h2>{studies[activeStudy].title}</h2>
              <p>{studies[activeStudy].content}</p>
              {studies[activeStudy].details.map((detail, idx) => (
                <div key={idx} className="section">
                  <h4>{detail.sectionTitle}</h4>
                  <ul>
                    {detail.sectionContent.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Psychologie;
