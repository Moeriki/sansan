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
              fixed(width: 200, height: 200) {
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
      <ul className="flex -mx-3 my-12">
        {insta.nodes.map(({ localFile }) => (
          <li className="px-3 overflow-hidden h-48" key={localFile.id}>
            <a href={instaUrl} rel="noopener noreferrer" target="_blank">
              <Image
                className="w-full object-cover"
                fixed={localFile.childImageSharp.fixed}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
