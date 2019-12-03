import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Regular from "@fortawesome/free-regular-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";

function CustomPage() {
  return (
    <Layout>
      <SEO
        title="Custom Integration"
        keywords={[`statically`, `custom`, `integration`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Your project + Statically
            </h2>
            <p className="text-lg mx-auto">
              Manage open source project and need CDN for it? Let us know!
            </p>
          </div>

          <div className="text-center">
            <Link
            to="/custom"
            >
              <div className="w-32 rounded overflow-hidden border border-gray-200 border-solid shadow-lg mx-auto text-center px-0 py-4 mb-2">
                <FontAwesomeIcon
                  icon={Icons.faCubes}
                  className="integration-logo mx-auto"
                />
                <span className="text-sm mt-5">Your server</span>
              </div>
            </Link>

            <div id="statically-to-you">
              <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

              <img
                src={'/images/statically.png'}
                className="integration-logo mx-auto my-2"
              />

              <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

              <div className="mt-2 mb-10">
                <FontAwesomeIcon
                  icon={Regular.faUser}
                  className="integration-logo mx-auto mb-1"
                />
                <span>User</span>
              </div>

              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Contact us!
              </Link>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
}

export default CustomPage;