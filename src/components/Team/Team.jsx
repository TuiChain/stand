import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import DataContext from '../../context/context';
import Title from '../Title/Title';
import TeamMember from './TeamMember';


const Team = () => {
  const { team } = useContext(DataContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 770) setIsMobile(true);
  }, []);

  return (
    <section id="team">
      <Container>
        <div className="team-wrapper">
          <Title title="Team" />
          <Row>
            {team.map((member, index) => {
              // eslint-disable-next-line no-unused-vars
              const { name, repo, img, git, linkedin, id } = member;

              return (
                <Col className="team-wrapper__member" lg={4} sm={4}>
                  <div className="team-wrapper__image">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 9,
                        perspective: 1000,
                        scale: 1,
                        speed: 100,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <TeamMember alt={name} filename={img} git={git} linkedin={linkedin} />
                      </div>
                    </Tilt>
                  </div>
                  <Fade
                    left={index % 3 == 0}
                    bottom={index % 3 == 1 || isMobile}
                    right={index % 3 == 2}
                    duration={1100}
                    delay={150}
                    distance="30px"
                  >
                    <div className="team-wrapper__text">
                      <h3 className="team-wrapper__text-name">{name}</h3>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Team;
