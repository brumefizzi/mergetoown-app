import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServicesCard } from "./ServicesCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const services = [
    {
      title: "Co-ownership Matching",
      description: "Connecting Individuals",
      imgUrl: projImg1,
    },
    {
      title: "Expert Support",
      description: "Guided Ownership",
      imgUrl: projImg2,
    },
    {
      title: "Financial Literacy",
      description: "Wealth Education",
      imgUrl: projImg1,
    },
    {
      title: "Property Assessments",
      description: "Informed Decisions",
      imgUrl: projImg1,
    },
    {
      title: "Enhanced Vetting",
      description: "Trust Assurance",
      imgUrl: projImg2,
    },
    {
      title: "Data Analytics",
      description: "Smart Investments",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="service" id="service">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p>Our services aim to remove barriers to entry for individuals who cannot purchase real estate property on their own, foster trust among co-owners, provide expert guidance, and enable informed decision-making in the co-ownership process.</p>
                <Tab.Container id="services-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">What We Provide</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">How it Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Special Offers</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          services.map((service, index) => {
                            return (
                              <ServicesCard
                                key={index}
                                {...service}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}