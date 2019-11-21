import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      introRemark: markdownRemark(
        id: { eq: "9ceb6ceb-69c8-5839-a4fb-87c64540785e" }
      ) {
        html
      }
      sandyAvatarFile: file(name: { eq: "avatar" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { introRemark, sandyAvatarFile } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
        <Image
          alt="Portret van Sandy Croes"
          className="inline-block rounded-full"
          fluid={sandyAvatarFile.childImageSharp.fluid}
          style={{ width: 100 }}
        />
      </div>
      <p
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: introRemark.html }}
      />
    </Layout>
  );
};

export default IndexPage;
