import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const GallaudetImgBlack = ({ alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes('GallaudetLogoBlack');
      });

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img className="rounded" alt={alt} fixed={imageFixed} />;
    }}
  />
);

GallaudetImgBlack.propTypes = {
  //  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default GallaudetImgBlack;
