import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import InstagramFeed from '../components/instagram-feed';
import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './remark.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      sandyAvatarFile: file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
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
          fixed={sandyAvatarFile.childImageSharp.fixed}
          style={{ width: 100 }}
        />
      </div>
      <div
        className={`my-12 leading-relaxed lg:leading-loose text-center text-lg lg:text-xl ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: introRemark.html }}
      />
      <InstagramFeed />
    </Layout>
  );
}
