import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import WorkImg from '../Image/WorkImg';

const Work = () => {
  const { works } = useContext(PortfolioContext);

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
    <section id="works">
      <Container>
        <div>
          <Title title="Work" className="work-wrapper-job" />
          {works.map(work => {
            const {
              id,
              title,
              role,
              workDate,
              info,
              info2,
              list11,
              list12,
              list13,
              list14,
              info3,
              list21,
              list22,
              list23,
              list24,
              info4,
              list31,
              list32,
              list33,
              info5,
              url,
              img,
            } = work;

            return (
              <Row key={id} className="work-wrapper job">
                <Row className="titleRow work-wrapper">
                  <Col lg={6} sm={6}>
                    <a
                      href={url || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Row className="middleRow">
                        <Fade left duration={1000} delay={500} distance="30px">
                          <div className="work-wrapper__image">
                            <Tilt
                              options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                              }}
                            >
                              <div data-tilt className="work-wrapper_image thumbnail rounded">
                                <WorkImg alt={title} filename={img} />
                              </div>
                            </Tilt>
                          </div>
                        </Fade>
                        <h3 className="work-wrapper-title">{title || 'Project Title'}</h3>
                      </Row>
                    </a>
                  </Col>
                  <Fade right duration={1000} delay={500} distance="30px">
                    <Col className="roleCol">
                      <h3 className="work-wrapper__text-role">{role || 'Project Title'}</h3>
                      <h4 className="work-wrapper-date">{workDate || 'Work dates'}</h4>
                    </Col>
                  </Fade>
                </Row>
                <Row className="contentRow work-wrapper">
                  <Fade bottom duration={1000} delay={1000} distance="30px">
                    <div className="work-wrapper__text">
                      <p>
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                      </p>
                      <p className="mb-2">{info2}</p>
                      <b className="list">{list11}</b>
                      <b className="list">{list12}</b>
                      <b className="list">{list13}</b>
                      <b className="list">{list14}</b>
                      <p className="mb-2 list_title">{info3}</p>
                      <b className="list">{list21}</b>
                      <b className="list list_indent">{list22}</b>
                      <b className="list list_indent">{list23}</b>
                      <b className="list">{list24}</b>
                      <p className="mb-2 list_title">{info4}</p>
                      <b className="list">{list31}</b>
                      <b className="list">{list32}</b>
                      <b className="list">{list33}</b>
                      <p className="mb-2 list_title">{info5}</p>
                    </div>
                  </Fade>
                </Row>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Work;
