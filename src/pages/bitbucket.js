import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function BitbucketPage() {
  return (
    <Layout>
      <SEO
        title="Bitbucket Integration"
        description="Loads file from Bitbucket fully optimized and deliver fast with the right of content type."
        keywords={[`statically`, `bitbucket`, `integration`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Bitbucket + Statically
            </h1>
            <p className="text-lg mx-auto">
              Loads file from Bitbucket fully optimized and deliver fast with the right of content type.
            </p>
          </div>

          <div id="content">
            <h3 className="text-lg font-bold mb-5">1. Copy file URL from Bitbucket</h3>
            <img className="border mb-5" src={'/images/docs/bitbucket-docs-0.png'} alt="Bitbucket"/>

            <h3 className="text-lg font-bold mb-5">2. Visit Statically.io and paste file URL from Bitbucket into Statically form</h3>
            <img className="border mb-5" src={'/images/docs/bitbucket-docs-1.png'} alt="Bitbucket"/>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default BitbucketPage;