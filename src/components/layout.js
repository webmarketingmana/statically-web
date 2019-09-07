import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
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
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 md:justify-center mx-autow-full">
        {children}
      </main>

      <div className="border-b"></div>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
