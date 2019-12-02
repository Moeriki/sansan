import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

export default function() {
  const data = useStaticQuery(graphql`
    query {
      insta: allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
        nodes {
          localFile {
            id
            childImageSharp {
              fixed(quality: 90, width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          instagram
        }
      }
    }
  `);
  const {
    insta,
    site: { siteMetadata },
  } = data;
  const instaUrl = `https://instagram.com/${siteMetadata.instagram}`;
  return (
    <div className="relative">
      <div className="absolute z-10 inset-0 flex justify-around items-center">
        <div className="bg-white font-title text-xl tracking-wider">
          <a
            className="inline-block px-6 py-3"
            href={instaUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            @{siteMetadata.instagram}
          </a>
        </div>
      </div>
      <ul className="flex flex-wrap -mx-3 my-12">
        {insta.nodes.map(({ localFile }) => (
          <li
            className="my-3 px-3 w-1/2 md:w-1/3 xl:w-1/6 text-center"
            key={localFile.id}
          >
            <a
              className="block"
              href={instaUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="max-w-full"
                fixed={localFile.childImageSharp.fixed}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
