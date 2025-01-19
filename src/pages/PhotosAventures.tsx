import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PhotosAventures() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      titre: "Randonnée en Montagne",
      description: "Une magnifique journée dans les Alpes",
      details: `Une aventure inoubliable au cœur des Alpes. L'ascension fut 
                difficile mais la vue au sommet en valait chaque pas. Le silence 
                de la montagne, l'air pur et les paysages à couper le souffle 
                ont fait de cette randonnée un moment magique.`
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      titre: "Forêt Enchantée",
      description: "Découverte d'un sentier mystérieux",
      details: `Au cœur de cette forêt ancestrale, chaque pas révèle un nouveau 
                mystère. Les rayons du soleil filtrant à travers les branches 
                créent une atmosphère féerique. Un lieu où le temps semble 
                s'arrêter et où la nature dévoile toute sa splendeur.`
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      titre: "Au Cœur de la Nature",
      description: "Moment de paix et de sérénité",
      details: `Ce moment de contemplation pure où la nature nous rappelle sa 
                grandeur et notre place dans ce monde. Le bruissement des feuilles, 
                le chant des oiseaux, et cette lumière parfaite qui traverse 
                la canopée créent une symphonie naturelle apaisante.`
    },
    // Added more photos for scrolling demonstration
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      titre: "Lever de Soleil",
      description: "Un moment magique dans les montagnes",
      details: `Le réveil avant l'aube en valait la peine. Voir le soleil 
                se lever sur les montagnes, colorant le ciel de teintes roses 
                et dorées, est une expérience qui restera gravée dans ma mémoire.`
    }
  ];

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
                style={{ cursor: 'pointer' }}
              >
                <Row className="g-0">
                  <Col xs={4}>
                    <Card.Img 
                      src={photo.url} 
                      alt={photo.titre}
                      style={{ height: '100%', objectFit: 'cover' }}
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
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="h3 mb-3">{selectedPhoto.titre}</Card.Title>
                <Card.Text style={{ whiteSpace: 'pre-line' }}>
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