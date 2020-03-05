import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import Title from '../Title/Title';
import TechnologyImg from '../Image/TechnologyImg';

// import all the pictures for the carousel
import techFastly from '../../images/tech_fastly.png';
import techRedis from '../../images/tech_redis.png';
import techGraylog from '../../images/tech_graylog.png';
import techLinux from '../../images/tech_linux.png';
import techElasticsearch from '../../images/tech_elasticsearch.png';
import techAnsible from '../../images/tech_ansible.png';
import techGrafana from '../../images/tech_grafana.png';
import techNginx from '../../images/tech_nginx.png';
import techVscode from '../../images/tech_vscode.png';
import techHyper from '../../images/tech_hyper.png';
import techMarkdown from '../../images/tech_markdown.png';
import techZsh from '../../images/tech_zsh.png';
import techGithub from '../../images/tech_github.png';

const Technology = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="technology">
      <Container>
        <Fade top duration={1000} delay={500} distance="30px">
          <Title title="Technology" className="technology-wrapper" />
        </Fade>
        <Row className="technology-wrapper">
          <Col md={6} sm={12}>
            <Fade left duration={1000} delay={500} distance="30px">
              <h1 className="subTitle">Love to work with</h1>
              <Slider {...settings}>
                <div>
                  <TechnologyImg filename="tech_ansible.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_elasticsearch.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_fastly.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_linux.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_grafana.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_graylog.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_redis.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_nginx.png" />
                </div>
              </Slider>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right duration={1000} delay={500} distance="30px">
              <h1 className="subTitle">My Toolbox</h1>
              <Slider {...settings}>
                <div>
                  <TechnologyImg filename="tech_vscode.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_hyper.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_markdown.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_zsh.png" />
                </div>
                <div>
                  <TechnologyImg filename="tech_github.png" />
                </div>
              </Slider>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technology;
