import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import GallaudetImgBlack from '../Image/GallaudetImgBlack';
import PortfolioContext from '../../context/context';

const Research = () => {
  const { research } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = research;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="research">
      <Container>
        <Title title="Research" />
        <Row className="research-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="research-wrapper__image">
                <GallaudetImgBlack alt="Gallaudet Logo" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="research-wrapper__info">
                <p className="research-wrapper__info-title">
                  {paragraphOne || 'Research Assistant'}
                </p>
                <p className="research-wrapper__info-text">
                  {paragraphTwo ||
                    'Developed Python scripts that process subtitles files by standardizing formats and generating statical data about the subtitles themselves'}
                </p>
                <p className="research-wrapper__info-text">
                  {paragraphThree ||
                    'Read research papers related to captions & deaf experience in the process of curating personalized library for large FCC research project named Captions DRRP (Disability and Rehabilitation Research Project)'}
                </p>
                <p className="research-wrapper__info-text">
                  {paragraphFour ||
                    'Participated and completed REU (Research Experience for Undergrads) program over the summer of 2019, where I conducted a small research project focused on the relationship between punctuations in captions and user experience'}
                </p>
                <p className="research-wrapper__info-text">
                  <a href="https://drive.google.com/file/d/1JfewkopmbpJdqw-1Hdipd5Rl0mTqQzKp/view?usp=sharing">
                    Click here to view my REU poster
                  </a>
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Research;
