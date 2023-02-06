import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AboutUs from './AboutUs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/movie-night-concept_1302-10113.jpg?w=2000"
            style={{ height: '600px', width: '350px' }}
            alt="First slide"
          />
          {/* <Carousel.Caption> */}
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?auto=format&h=200"
            style={{ height: '600px', width: '350px' }}
            alt="Second slide"
          />
          {/* <Carousel.Caption> */}
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/011/508/381/original/movie-film-banner-design-template-cinema-background-concept-cinema-concept-with-popcorn-filmstrip-and-film-clapper-on-yellow-background-illustration-free-vector.jpg"
            style={{ height: '600px', width: '350px' }}
            alt="Third slide"
          />
          {/* <Carousel.Caption> */}
          {/* <h3>Third slide label</h3> */}
          {/* <p> */}
          {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          {/* </p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;


