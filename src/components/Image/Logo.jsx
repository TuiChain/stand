import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

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
      return <Img className="rounded-circle shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

Logo.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
