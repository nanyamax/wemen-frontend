import React from 'react';
import { Container } from 'react-bootstrap';
import HomepageCarousel from './components/carousel';

const HomePage: React.FC = () => {
  return (
    <Container fluid className="home">
      <div className="carousel-div">
        <HomepageCarousel />
      </div>
    </Container>
  );
};

export default HomePage;
