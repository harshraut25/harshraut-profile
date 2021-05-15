import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:harshraut4500@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="harshraut4500@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/harsh-raut/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn Profile">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/harshraut25" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/channel/UCez9N0WdJgOmAiuBGMxbgMg" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Check out my youtube channel">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://www.facebook.com/harsh.raut.16568/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="My Facebook Account">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
