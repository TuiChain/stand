import { useStaticQuery, graphql } from 'gatsby';

const getWhitepaperURL = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            relativePath
            publicURL
            name
          }
        }
      }
    }
  `);
  const whitepaper = data.allFile.edges.find((n) => n.node.relativePath.includes('whitepaper.pdf'));

  return whitepaper.node.publicURL;
};

export default getWhitepaperURL;
