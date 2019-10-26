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
      <header>
        <div className="container mx-auto">
          <h1>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
