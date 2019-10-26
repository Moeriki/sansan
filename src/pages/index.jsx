import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ComponentQuery {
      sandyAvatarFile: file(name: { eq: "avatar" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
        <Image
          alt="Portret van Sandy Croes"
          className="inline-block rounded-full"
          fluid={data.sandyAvatarFile.childImageSharp.fluid}
          style={{ width: 100 }}
        />
      </div>
      <p className="p-6">
        Hi, ik ben Sandy! Als fotograaf hou ik ervan de leukste en mooiste
        momenten vast te leggen op camera. Natuurlijke, spontane en lichte
        beelden zijn mijn specialiteit. Je kan bij mij terecht voor
        familiefoto’s, huwelijksreportages en bedrijfsfotografie. Ik werk voor
        verscheidene webshops waarvoor ik de productfotografie verzorg en
        reclamebeelden maak. Contacteer me voor meer informatie!
      </p>
    </Layout>
  );
};

export default IndexPage;
