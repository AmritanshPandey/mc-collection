import { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const FeatureCardCarousel = ({ items = [], autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  // };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!items.length) return;
    const slideTimer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideTimer);
  }, [currentIndex, autoSlideInterval, items.length]);

  useEffect(() => {
    if (!items.length) return;
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex, items.length]);


  if (!items.length) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>No items to display.</div>;
  }

  return (
    <div className='main-carousel-container'>


      <div className="carousel-container">
        <div className="carousel-slide" ref={slideRef}>
          {items.map((item, index) => (
            <div className="carousel-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="carousel-content">
                <span className='heading carousel-title'>{item.title}</span>
                <Link to={item.link} className="book-now-button">Book Now</Link>
              </div>
            </div>
          ))}
        </div>


      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FeatureCardCarousel;
