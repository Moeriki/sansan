import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import InstagramFeed from '../components/instagram-feed';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      sandyAvatarFile: file(name: { eq: "avatar" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      introRemark: markdownRemark(fileAbsolutePath: { glob: "**/intro.md" }) {
        html
      }
    }
  `);
  const { introRemark, sandyAvatarFile } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="my-12 text-center">
        <Image
          alt="Portret van Sandy Croes"
          className="inline-block rounded-full"
          fluid={sandyAvatarFile.childImageSharp.fluid}
          style={{ width: 100 }}
        />
      </div>
      <p
        className="my-12 leading-relaxed lg:leading-loose text-lg lg:text-xl"
        dangerouslySetInnerHTML={{ __html: introRemark.html }}
      />
      <InstagramFeed />
    </Layout>
  );
}
