import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import photos from "../data/photosData";

function PhotosAventures() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <Container className="content-section">
      <h1 className="text-center mb-5">Photos et Aventures</h1>
      <Row>
        <Col md={6}>
          <div className="scrollable-section">
            {photos.map((photo) => (
              <Card
                key={photo.id}
                className="photo-card mb-4"
                onClick={() => setSelectedPhoto(photo)}
                style={{ cursor: "pointer" }}
              >
                <Row className="g-0">
                  <Col xs={4}>
                    <Card.Img
                      src={photo.url}
                      alt={photo.titre}
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body>
                      <Card.Title>{photo.titre}</Card.Title>
                      <Card.Text>{photo.description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
        <Col md={6}>
          {selectedPhoto ? (
            <Card className="details-panel">
              <Card.Img
                variant="top"
                src={selectedPhoto.url}
                alt={selectedPhoto.titre}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h3 mb-3">
                  {selectedPhoto.titre}
                </Card.Title>
                <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {selectedPhoto.details}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center text-muted mt-5">
              <h3>Sélectionnez une photo pour voir plus de détails</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PhotosAventures;
