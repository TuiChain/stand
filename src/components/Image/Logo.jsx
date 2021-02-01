/* eslint-disable no-param-reassign */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let rotating = false;

const rotate = (logo, angle) => {
  logo.style.transform = `rotateY(${angle}deg)`;
  logo.style.webkitTransform = `rotateY(${angle}deg)`;
  logo.style.OTransform = `rotateY(${angle}deg)`;
  logo.style.MozTransform = `rotateY(${angle}deg)`;
};

const startRotate = async (logo) => {
  rotating = true;

  let angle = 0;
  for (let i = 0; i < 360; i += 1) {
    rotate(logo, angle);
    // eslint-disable-next-line no-await-in-loop
    await sleep(5);
    angle += 1;
  }
  rotating = false;
};

const rotateLogo = () => {
  const logoDiv = document.getElementById('rotate3D');
  // eslint-disable-next-line prefer-destructuring
  const logo = logoDiv.getElementsByTagName('div')[0];
  if (!rotating) startRotate(logo);
};

const Logo = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        assets: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350, quality: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.assets.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return (
        <div
          onMouseEnter={() => {
            rotateLogo();
          }}
          id="rotate3D"
        >
          <Img className="rounded-circle shadow-lg" alt={alt} fixed={imageFixed} />
        </div>
      );
    }}
  />
);

Logo.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
