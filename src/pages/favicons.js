import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function FaviconsPage() {
  return (
    <Layout>
      <SEO
        title="Favicons"
        description="The simple &amp; powerful API to serve favicon from any domain."
        keywords={[`statically`, `favicons`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mb-12 text-center max-w-4xl mx-auto px-4 md:px-0">
          <h1 className="text-3xl font-bold inline-block max-w-xl my-8 p-3">
            The simple &amp; powerful API to serve favicon from any domain
          </h1>

          <div className="bg-gray-300 text-left sm:text-center p-2 max-w-3xl m-auto">
            <code className="overflow-wrap">https://cdn.statically.io/favicon/:url</code>
          </div>
        </section>

        <section className="mb-24 text-left max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-5">Examples</h2>
          <p className="text-lg font-bold">Using default function</p>
          <a
            className="text-red-600 block"
            href="https://cdn.statically.io/favicon/statically.io">
              https://cdn.statically.io/favicon/statically.io
          </a>
          <img
            className="inline ml-0 m-1"
            src="https://cdn.statically.io/favicon/google.com"
            alt="favicon 1"
          />
          <img
            className="inline ml-0 m-1"
            src="https://cdn.statically.io/favicon/duckduckgo.com"
            alt="favicon 2"
          />
          <img
            className="inline m-1"
            src="https://cdn.statically.io/favicon/github.com"
            alt="favicon 3"
          />
          <img
            className="inline m-1"
            src="https://cdn.statically.io/favicon/statically.io"
            alt="favicon 4"
          />

          <p className="text-lg font-bold mt-5">Forcing to use SSL</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/favicon/example.com?ssl=1">
              https://cdn.statically.io/favicon/example.com<span className="font-bold">?ssl=1</span>
          </a>

          <p className="text-lg font-bold mt-2">Applying custom cache</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/favicon/example.com?cache=31556952">
              https://cdn.statically.io/favicon/example.com<span className="font-bold">?cache=31556952</span>
          </a>

          <p className="text-lg font-bold mt-2">Disabling cache:</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/favicon/example.com?cache=0">
              https://cdn.statically.io/favicon/example.com<span className="font-bold">?cache=0</span>
          </a>
        </section>

      </div>
    </Layout>
  );
}

export default FaviconsPage;