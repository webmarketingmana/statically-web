import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function DocsPage() {
  return (
    <Layout>
      <SEO
        title="Docs"
        keywords={[`statically`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Statically Documentation
            </h2>
            <p className="text-lg mx-auto">
              This page is an overview of the Statically documentation and related resources.
            </p>
          </div>

          <div className="mb-20">
            <ul class="list-disc">
              <li>
                <Link to="/github">Serve GitHub files with Statically</Link>
              </li>
              <li>
                <Link to="/gitlab">Serve GitLab files with Statically</Link>
              </li>
              <li>
                <Link to="/bitbucket">Serve Bitbucket files with Statically</Link>
              </li>
              <li>
                <Link to="/wordpress">Serve WordPress SVN files with Statically</Link>
              </li>
              <li>
                <Link to="/images">Optimize and transform image with Statically Images</Link>
              </li>
              <li>
                <Link to="/screenshot">Capture any website using Statically Screenshot</Link>
              </li>
              <li>
                <Link to="/favicon">Get favicon from a domain without touching the domain itself</Link>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default DocsPage;