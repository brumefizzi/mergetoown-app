import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServicesCard } from "./ServicesCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const services = [
    {
      title: "Co-ownership Matching",
      description: "Connecting Individuals",
      imgUrl: projImg2,
    },
    {
      title: "Expert Support",
      description: "Guided Ownership",
      imgUrl: projImg1,
    },
    {
      title: "Financial Literacy",
      description: "Wealth Education",
      imgUrl: projImg6,
    },
    {
      title: "Property Assessments",
      description: "Informed Decisions",
      imgUrl: projImg8,
    },
    {
      title: "Enhanced Vetting",
      description: "Trust Assurance",
      imgUrl: projImg7,
    },
    {
      title: "Data Analytics",
      description: "Smart Investments",
      imgUrl: projImg5,
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
                      <Nav.Link eventKey="second">How It Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Our Unique Value</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p>The platform employs a rigorous vetting process, matching subscribers based on their interests, options, and risk appetite, and integrates with payment processors for efficient financial management. Key features include a community space for investors, options for minimum and maximum group size, and advisory services from industry practitioners, among others.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Through an AI-driven matching system, it aligns individuals based on shared interests, financial goals, and risk tolerance. Additional unique features encompass financial literacy training from industry professionals and sophisticated property assessment tools. It also has a solid contingency plan to handle situations when a co-owner discontinues payment, ensuring stability and security for all parties. This pioneering platform truly redefines home buying for the modern age.</p>
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