import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function GithubPage() {
  return (
    <Layout>
      <SEO
        title="GitHub Integration"
        description="Loads file from GitHub fully optimized and deliver fast with the right of content type."
        keywords={[`statically`, `github`, `integration`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              GitHub + Statically
            </h1>
            <p className="text-lg mx-auto">
              Loads file from GitHub fully optimized and deliver fast with the right of content type.
            </p>
          </div>

          <div id="content">
            <h3 className="text-lg font-bold mb-5">1. Copy file URL from GitHub</h3>
            <img className="border mb-5" src={'/images/docs/github-docs-0.png'}/>

            <h3 className="text-lg font-bold mb-5">2. Visit Statically.io and paste file URL from GitHub into Statically form</h3>
            <img className="border mb-5" src={'/images/docs/github-docs-1.png'}/>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default GithubPage;