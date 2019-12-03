import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ScreenshotPage() {
  return (
    <Layout>
      <SEO
        title="Screenshot"
        keywords={[`statically`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mb-12 text-center max-w-4xl mx-auto px-4 md:px-0">
          <h1 className="text-3xl font-bold inline-block max-w-3xl my-8 p-3">
            The free &amp; fast website screenshot and transformation for modern web development.
          </h1>

          <div className="bg-gray-300 text-left sm:text-center p-2 max-w-3xl m-auto">
            <code className="overflow-wrap">https://cdn.statically.io/screenshot/:url</code>
          </div>
        </section>

        <section className="mb-24 text-left max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-5">Examples</h2>
          <p className="text-lg font-bold">Using default function</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/statically.io">
              https://cdn.statically.io/screenshot/statically.io
          </a>
          <img
            className="border max-w-md mt-2 mb-5"
            src="https://cdn.statically.io/screenshot/statically.io"
          />

          <p className="text-lg font-bold">Changing type to PNG</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?type=png">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?type=png</span>
          </a>

          <p className="text-lg font-bold">Changing type to WebP</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?type=webp">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?type=webp</span>
          </a>

          <p className="text-lg font-bold mt-2">Changing screenshot quality</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?quality=75">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?quality=75</span>
          </a>

          <p className="text-lg font-bold mt-2">Getting full page screenshot</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?fullPage=true">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?fullPage=true</span>
          </a>

          <p className="text-lg font-bold mt-2">Getting mobile version</p>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?mobile=true">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?mobile=true</span>
          </a>

          <p className="text-lg font-bold mt-2">Applying various parameters</p>
          <a
            className="text-red-600 block"
            href="https://cdn.statically.io/screenshot/example.com?mobile=true&fullPage=true">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?mobile=true&fullPage=true</span>
          </a>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?type=jpeg&quality=75&fullPage=true">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?type=jpeg&quality=75&fullPage=true</span>
          </a>

          <p className="text-lg font-bold mt-2">Resizing screenshot image</p>
          <a
            className="text-red-600 block"
            href="https://cdn.statically.io/screenshot/example.com?w=350">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?w=350</span>
          </a>
          <a
            className="text-red-600"
            href="https://cdn.statically.io/screenshot/example.com?w=250">
              https://cdn.statically.io/screenshot/example.com<span className="font-bold">?w=250</span>
          </a>

          <p className="text-lg font-bold mt-2">Alias</p>
          <p>Screenshot can also be accessed using <strong>/s/</strong> path which will be redirected to <strong>/screenshot/</strong> for simple usage purposes.</p>
        </section>

      </div>
    </Layout>
  );
}

export default ScreenshotPage;