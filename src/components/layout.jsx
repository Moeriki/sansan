import { Link, useStaticQuery, graphql } from 'gatsby';
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
        <div className="container mx-auto">
          <h1 className="text-center">
            <Link className="block py-6" to="/">
              <span className="font-title text-2xl">
                {data.site.siteMetadata.title}
              </span>
            </Link>
          </h1>
        </div>
      </header>
      <div className="bg-scp-white p-6">
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
