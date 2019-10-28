import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      sandyAvatarFile: file(name: { eq: "avatar" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scp {
        settings(where: { id: "ck2at5icgh2nc0b49ym99rfw5" }) {
          intro
        }
      }
    }
  `);
  const {
    sandyAvatarFile,
    scp: { settings },
  } = data;
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
      <p className="p-6">{settings.intro}</p>
    </Layout>
  );
};

export default IndexPage;
