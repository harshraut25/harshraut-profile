import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Harsh Raut</strong>
                <br />A passionate, energetic and ambitious programmer who has developed a mature and responsible approach to any task I undertake, 
                or situation that I am presented with.
                <br/>
                I am pursuing Computer Engineering in Veeermata Jijabai Technological Institute(VJTI).
                <br />
                The reason why i love coding is, if I can think it, I can make it a reality, and hence I have invested 
                almost my 4 and half years now to build my software skills. I am a Full Stack Web Developer with React.js, Redux, 
                Express.js, Node.js, and Firebase as my tech stack. My technical skills include the programming in Python, Java, C, C++,
                databases.
               
                <br />
                I have worked on the projects like Location Based Application in Java, Blog Website on Expenditure Control in MERN Stack,
                To-do list in MERN and many more. 
                <br />
                
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1kNLGM-mSdmaInyO8RjkZQm-YB_fHmGmY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/harshraut25" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/harsh-raut/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
