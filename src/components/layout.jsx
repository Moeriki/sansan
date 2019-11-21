import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './layout.css';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          email
          facebook
          instagram
          title
        }
      }
    }
  `);
  const {
    site: { siteMetadata },
  } = data;
  const socialLinks = [
    {
      href: `https://www.facebook.com/${siteMetadata.facebook}`,
      icon: faFacebookF,
    },
    {
      href: `https://instagram.com/${siteMetadata.instagram}`,
      icon: faInstagram,
    },
    {
      href: `mailto:${siteMetadata.email}`,
      icon: faEnvelope,
    },
  ];
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto mt-6">
          <h1 className="text-center">
            <span className="font-title text-2xl">{siteMetadata.title}</span>
          </h1>
          <div className="mt-1 text-center">
            {socialLinks.map(({ href, icon }) => (
              <a href={href} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="mx-3" icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </header>
      <div className="bg-scp-white p-6 mt-6">
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
