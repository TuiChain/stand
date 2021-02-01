import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Links = () => {
  return (
    <section id="links">
      <Container>
        <Title title="Useful Links" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="links-container">
            <div className="link-wrapper">
              <a target="_blank" rel="noopener noreferrer" className="" href="https://github.com/TuiChain">
                <i className="fa fa-github" />
              </a>
              <p className="link-wrapper__text">Source Code</p>
            </div>
            <div className="link-wrapper">
              <a target="_blank" rel="noopener noreferrer" className="" href="https://github.com/TuiChain/documentation/tree/main/docs">
                <i className="fa fa-file" />
              </a>
              <p className="link-wrapper__text">Documentation</p>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Links;
