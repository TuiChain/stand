/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { Col, Container, ResponsiveEmbed } from 'react-bootstrap';
import Title from '../Title/Title';
import DataContext from '../../context/context';

const Demo = () => {
  const { demo } = useContext(DataContext);

  const [showCredentials, setShowCredentials] = useState(false);

  return (
    <section id="demo">
      <Container>
        <div className="demo-wrapper">
          <Title title="Demo" />
          <div style={{maxWidth: 800, margin: "auto", paddingBottom: "5rem"}}>
            {demo.video && (
              <ResponsiveEmbed aspectRatio="16by9">
                <iframe
                  src={demo.video.videoSrcURL}
                  title={demo.video.videoTitle}
                  allow="encrypted-media; gyroscope;"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </ResponsiveEmbed>
            )}
          </div>
          <h3 className="demo-wrapper__text">
            Check our live demo at{' '}
            <a target="_blank" rel="noopener noreferrer" href="http://tuichain.pt">
              tuichain.pt
            </a>
            &nbsp;(you must use HTTP)
          </h3>
          <p className="demo-cta">
            <span
              onClick={() => setShowCredentials(!showCredentials)}
              className="cta-btn cta-btn--hero"
            >
              {showCredentials ? 'Hide Credentials' : 'Show Credentials'}
            </span>
          </p>
          {showCredentials && (
            <>
              <h3 className="demo-wrapper__text__credentials"> Access credentials: </h3>
              <div className="credentials-wrapper">
                {demo.credentials.map((credentials) => {
                  return (
                    <Col xs={9} md={3} sm={5} className="credential">
                      <h3>
                        Username: <span className="info"> {credentials.username} </span>{' '}
                      </h3>
                      <h3>
                        Password: <span className="info"> {credentials.password} </span>{' '}
                      </h3>
                    </Col>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Demo;
