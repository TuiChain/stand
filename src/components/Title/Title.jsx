import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, green }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className={green? "green-title" : "section-title"}>{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  green: PropTypes.bool,
};

export default Title;
