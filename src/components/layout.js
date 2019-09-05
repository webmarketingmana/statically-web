import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

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

      <footer>
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <ul className="flex">
            <li className="mr-2">
              &copy; 2019 {" "}
              <Link
                to="/"
                className="font-bold"
              >
                Statically
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/about"
                className="font-bold"
              >
                About
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/docs"
                className="font-bold"
              >
                Docs
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/support-statically"
                className="font-bold"
              >
                Support us!
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/blog"
                className="font-bold"
              >
                Blog
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/contact"
                className="font-bold"
              >
                Help
              </Link>
            </li>
          </ul>

          <p>
            <Link
              to="/shirts"
              className="font-bold mr-2"
            >
              T-Shirts
            </Link>
            <a
              href="https://github.com/marsble/statically"
              className="font-bold"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
