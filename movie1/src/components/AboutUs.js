import React from 'react';

const AboutUs = () => {
  return (
    // <div>
    <section className="about-section bg-color" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
            <h3>About Us</h3>
            <p>
              Movie Bazar provides the latest movie reviews of new and recent
              movies in theaters of Bollywood, Hollywood, Kollywood and
              Tollywood.
            </p>
            <p>
              This site helps the people to get a general awareness of new
              release film.
            </p>{' '}
            {/* <a href="#" className="btn btn-default-new">
                Start learning Bootstrap
              </a>{' '} */}
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default AboutUs;
