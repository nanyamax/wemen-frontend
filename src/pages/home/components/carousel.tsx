import Carousel from 'react-bootstrap/Carousel';

const HomepageCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <p>
          <q>
            Ah, women. They make the highs higher and the lows more frequent.
          </q>
          _Friedrich Nietzche
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p>
          <q>
            Women need real moments of solitude and self-reflection to balance
            out much of ourselves we give away.
          </q>
          _Barbara De Angelis
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p>
          <q>
            Women, like men, should try to do the impossible. And when they
            fail, their failure should be a challenge to others
          </q>
          _Amelia Earhart
        </p>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomepageCarousel;
