import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';

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
                className="font-bold hover:text-teal-400"
              >
                Statically
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/about"
                className="font-bold hover:text-teal-400"
              >
                About
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/docs"
                className="font-bold hover:text-teal-400"
              >
                Docs
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/support-statically"
                className="font-bold hover:text-teal-400"
              >
                Support us!
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/terms"
                className="font-bold hover:text-teal-400"
              >
                Terms
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/privacy"
                className="font-bold hover:text-teal-400"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-bold hover:text-teal-400"
              >
                Help
              </Link>
            </li>
          </ul>

          <p>
            <Link
              to="/shirts"
              className="mr-4"
              title="T-Shirts"
            >
              <FontAwesomeIcon
                icon={Icons.faTshirt}
                className="text-teal-400 hover:text-blue-400"
                size="2x"
              />
            </Link>
            <a
              href="https://github.com/marsble/statically"
              title="GitHub"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={Brands.faGithub}
                size="2x"
              />
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
