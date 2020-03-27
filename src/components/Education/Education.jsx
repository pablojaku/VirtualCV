import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import GallaudetImgNormal from '../Image/GallaudetImgNormal';
import AWSCertImg from '../Image/AWSCertImg';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { education } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo } = education;

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
    <section id="education">
      <Container>
        <Title title="Education" />
        <Row className="education-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="education-wrapper__image">
                <a href="https://www.gallaudet.edu/">
                  <GallaudetImgNormal alt="Gallaudet Logo" filename={img} />
                </a>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="education-wrapper__info">
                <p className="education-wrapper__info-text--degree">
                  {paragraphOne || 'B.S. in Information Technology'}
                </p>
                <p className="education-wrapper__info-text--date">
                  {paragraphTwo || '(Expected) May 2020'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        {/* certifications row */}
        <Row className="education-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="education-wrapper__image">
                <a href=" http://aws.amazon.com/verification">
                  <AWSCertImg alt="AWS Certification Logo" filename={img} />
                </a>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="education-wrapper__info">
                <p className="education-wrapper__info-text--degree">
                  {paragraphOne || 'Cloud Practitioner'}
                </p>
                <p className="education-wrapper__info-text--date">{paragraphTwo || 'March 2020'}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
