import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function TermsPage() {
  return (
    <Layout>
      <SEO
        title="Terms of Services"
        description="Learn Statically's Terms of Services"
        keywords={[`statically`, `terms`]}
      />

      <div className="max-w-2xl mx-auto px-4 md:px-0">

        <section className="mt-20 mb-24 text-center">

          <h1 className="font-bold text-5xl">Terms of Services</h1>
          <p className="my-4"><strong className="font-semibold">Effective Date:</strong> 2019/12/03</p>

        </section>

        <section className="mt-20 mb-24">

          <p className="my-4 text-lg text-gray-700">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong></p>
          {/**
          <h3 className="font-bold text-2xl">Content</h3>
          <p className="my-4">Our Service allows you to link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&ldquo;Content&rdquo;). You are responsible for the ... <mark>TODO</mark></p>
          */}
          <h3 className="font-bold text-2xl">Links To Other Web Sites</h3>
          <p className="my-4">Our website may contain links to third-party web sites or services that are not owned or controlled by Statically.</p>
          <p className="my-4">Statically has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Statically shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          <p className="my-4">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
          <h3 className="font-bold text-2xl">Termination</h3>
          <p className="my-4">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p className="my-4">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
          <h3 className="font-bold text-2xl">Changes</h3>
          <p className="my-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days&rsquo; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <p className="my-4">If you have any questions about these Terms, please contact us:</p>
          <ul className="my-4 ml-8 list-disc">
            <li>By visiting our <Link className="text-red-500" to="/contact">contact page</Link>.</li>
            <li>Tweet us on <a className="text-red-500" href="https://twitter.com/staticallyio">Twitter</a>.</li>
          </ul>

        </section>

      </div>
    </Layout>
  );
}

export default TermsPage;
