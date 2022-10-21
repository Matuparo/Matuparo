import Carousel from 'react-bootstrap/Carousel';
import galeria from '../data/galeria';

 const GaleriaCarousel = () => {
  return (
    <Carousel>
      {galeria.map(({src, caption})=>( <Carousel.Item>
        <img
          className="d-block carouselImg"
          src={src}
          alt={caption}

        />
      </Carousel.Item>))}
    </Carousel>
)}

export default GaleriaCarousel