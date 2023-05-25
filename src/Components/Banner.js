import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = [ "Co-ownership", "Tenancy in Common", "Counterparty Trust" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100); // Adjust this value as needed
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Merge2Own</span>
                <h3>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Co-ownership", "Tenancy in Common", "Counterparty Trust" ]'><span className="wrap">{text}</span></span></h3>
                  <p>M2O is an early-stage startup conceived by two University of Waterloo MBET students. The platform is designed to address the limited personal network, counterparty trust, and home affordability concerns of first-time homebuyers and others who encounter significant barriers to home ownership in Canada.
                    We recently won the Greenhouse Inc Social Impact Fund Pitch Competition Award. 

                    Are you experiencing challenges in buying your own home or interested in providing services to enable people buy their own home?

                    If you are excited as we are in finding creative solutions, please sign up to stay informed when we Go Live.
                  </p>
                  <button onClick={() => console.log('contact')}>Sign Up <ArrowRightCircle size={25} /></button>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}