import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from '@brainhubeu/react-carousel';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import '@brainhubeu/react-carousel/lib/style.css';

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
              <div className="imgCarousel">
                <Carousel
                  slidesPerPage={3}
                  slidesPerScroll={1}
                  animationSpeed={1500}
                  autoPlay={3000}
                  stopAutoPlayOnHover
                  offset={30}
                  itemWidth={150}
                  centered
                  infinite
                  breakpoints={{
                    1000: {
                      // these props will be applied when screen width is less than 1000px
                      offset: 20,
                      itemWidth: 150,
                      slidesPerPage: 1,
                      slidesPerScroll: 1,
                      animationSpeed: 2000,
                    },
                    500: {
                      offset: 20,
                      itemWidth: 150,
                      slidesPerPage: 1,
                      slidesPerScroll: 1,
                      animationSpeed: 2000,
                    },
                  }}
                >
                  {/* technology I work with: NGINX, ElasticSearch, Fastly, Graylog, linux CentOS, Redis, Ansible, Grafana */}
                  <img alt="Fastly Logo" src={techFastly} />
                  <img alt="Nignx Logo" src={techNginx} />
                  <img alt="Redis Logo" src={techRedis} />
                  <img alt="GrayLog Logo" src={techGraylog} />
                  <img alt="Linux Logo" src={techLinux} />
                  <img alt="ElasticSearch Logo" src={techElasticsearch} />
                  <img alt="Ansible Logo" src={techAnsible} />
                  <img alt="Grafana Logo" src={techGrafana} />
                </Carousel>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right duration={1000} delay={500} distance="30px">
              <h1 className="subTitle">My Toolbox</h1>
              <div className="imgCarousel">
                <Carousel
                  slidesPerPage={3}
                  slidesPerScroll={1}
                  animationSpeed={1500}
                  autoPlay={3000}
                  stopAutoPlayOnHover
                  offset={30}
                  itemWidth={150}
                  centered
                  infinite
                >
                  {/* technology tools I like: VSCODE, Hyper, MarkDown, ZSH, GitHub  */}
                  <img alt="VSCode Logo" src={techVscode} />
                  <img alt="Hyper Logo" src={techHyper} />
                  <img alt="MarkDown Logo" src={techMarkdown} />
                  <img alt="ZSH Logo" src={techZsh} />
                  <img alt="GitHub Logo" src={techGithub} />
                </Carousel>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technology;
