import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`statically`, `info`, `contact`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              We love to hear from you!
            </h1>
          </div>

          <form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto" name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="frans@example.com" required />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="subject">
                Subject
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="url" name="subject" type="text" placeholder="Hey, please support our open source project" required />
            </div>

            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" type="text" placeholder="Your message goes here" required></textarea>
            </div>

             <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
              Submit
            </button>
          </form>

        </section>

      </div>
    </Layout>
  );
}

export default ContactPage;