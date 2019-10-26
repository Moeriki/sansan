import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto mt-6">
          <h1 className="text-center">
            <span className="font-title text-2xl">
              {data.site.siteMetadata.title}
            </span>
          </h1>
          <div className="mt-1 text-center">
            <a
              href="https://www.facebook.com/sandycroesphotography"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="mx-3" icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com/sandycroes"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="mx-3" icon={faInstagram} />
            </a>
            <a
              href="mailto:info@sandycroes.be"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="mx-3" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </header>
      <div className="bg-scp-white p-6 mt-6">
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
