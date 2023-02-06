import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">Forum</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  {/* <li>
                    <a href="#">Careers</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Contact us</h3>
                <p>
                  Movie Bazar, 6th Floor, Discovery of India Building Nehru
                  Centre, Dr. Annie Besant Road Worli, Mumbai 400018, India T.
                  +91 22 6628 8288
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-square-snapchat"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <p className="copyright">Movie Bazar © 2018</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
