import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './layout.css';

const SOCIAL_LOGOS = {
  email: faEnvelope,
  facebook: faFacebookF,
  instagram: faInstagram,
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ComponentQuery {
      scp {
        settings(where: { id: "ck2at5icgh2nc0b49ym99rfw5" }) {
          title
        }
        socialLinkses(where: { status: PUBLISHED }) {
          network
          href
        }
      }
    }
  `);
  const {
    scp: { settings, socialLinkses: socialLinks },
  } = data;
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto mt-6">
          <h1 className="text-center">
            <span className="font-title text-2xl">{settings.title}</span>
          </h1>
          <div className="mt-1 text-center">
            {socialLinks.map(({ href, network }) => (
              <a href={href} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="mx-3"
                  icon={SOCIAL_LOGOS[network]}
                />
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
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
