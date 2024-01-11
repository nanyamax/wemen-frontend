import Carousel from 'react-bootstrap/Carousel';

const HomepageCarousel = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item className="carousel-item">
        <div>
          <q>
            Ah, women. They make the highs higher and the lows more frequent.
          </q>
          - Friedrich Nietzche
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <q>
            Women need real moments of solitude and self-reflection to balance
            out much of ourselves we give away.
          </q>
          - Barbara De Angelis
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <q>
            Women, like men, should try to do the impossible. And when they
            fail, their failure should be a challenge to others
          </q>
          - Amelia Earhart
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomepageCarousel;
