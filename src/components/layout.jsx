import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

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
      href: `mailto:${siteMetadata.email}`,
      icon: <i className="fas fa-envelope" />,
    },
  ];
  return (
    <div className="flex flex-col justify-between h-full">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/14c296eb88.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div>
        <div className="bg-scp-gold h-1" />
        <header className="bg-white">
          <div className="container mx-auto mt-6">
            <h1 className="text-center">
              <span className="font-title text-3xl">{siteMetadata.title}</span>
            </h1>
            <div className="mt-1 text-center">
              {socialLinks.map(({ href, icon }) => (
                <a
                  className="inline-block mx-3"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </header>
        <div className="bg-scp-white p-6 mt-6">
          <main className="container mx-auto">{children}</main>
        </div>
      </div>
      <footer className="bg-scp-black">
        <div className="h-32 flex justify-around items-center">
          <div className="text-scp-white">
            {socialLinks.map(({ href, icon }) => (
              <a
                className="inline-block mx-3"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
