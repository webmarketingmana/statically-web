import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import staticallyLogo from "../../static/images/branding/statically-logo-dark.svg";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4">
        <Link
          to="/"
          id="logo"
          className="flex items-center no-underline"
        >
          <span className="font-bold text-xl tracking-tight hidden">{siteTitle}</span>
          <img
            className="h-8"
            src={staticallyLogo}
            alt="Statically"
            title="Statically logo"
          />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="font-semibold">
            <Link
              to="/features"
              className="block md:inline-block mt-4 md:mt-0 mr-6 text-lg hover:text-red-500 focus:text-red-500"
              title="Discover Statically features"
            >
              Features
            </Link>

            <Link
              to="/docs"
              className="block md:inline-block mt-4 md:mt-0 mr-6 text-lg hover:text-red-500 focus:text-red-500"
              title="Statically Documentation"
            >
              Docs
            </Link>

            {/**
            <Link
              to="/network"
              className="block md:inline-block mt-4 md:mt-0 mr-6 text-lg hover:text-red-500 focus:text-red-500"
            >
              Network
            </Link>
            */}

            <Link
              to="/support-statically"
              className="block md:inline-block mt-4 md:mt-0 mr-6 text-red-500"
              title="Help us make this project sustainable"
            >
              Support Us!
            </Link>

            <a
              href="https://github.com/staticallyio/statically"
              className="block md:inline-block mt-4 md:mt-0 mr-3"
              title="Star this project on GitHub"
            >
              <img className="sm:mb-2 md:-mb-1" src="https://cdn.statically.io/badges/github/style=social,cache=3600/stars/staticallyio/statically.svg" alt="GitHub stars" />
            </a>

            <a
              href="https://twitter.com/intent/follow?screen_name=staticallyio"
              className="block md:inline-block mt-4 md:mt-0"
              title="Follow @staticallyio on Twitter"
            >
              <img className="sm:mb-2 md:-mb-1" src="https://cdn.statically.io/badges/twitter/label=Follow,cache=3600/follow/staticallyio.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
