import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AbusePage() {
  return (
    <Layout>
      <SEO
        title="Abuse"
        keywords={[`statically`]}
      />

      <div className="max-w-2xl mx-auto px-8 md:px-0">

        <section className="mt-20 mb-24 text-center">

          <h2 className="font-bold text-5xl">Abuse</h2>
          <p className="my-4">Effective Date: YYYY/MM/DD</p>

        </section>

        <section className="mt-20 mb-24">

          <p className="my-4">Lorem ipsum dolor sit amet.</p>

        </section>

      </div>
    </Layout>
  );
}

export default AbusePage;
