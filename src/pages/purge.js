import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function PurgePage() {
  return (
    <Layout>
      <SEO
        title="Purge Request"
        keywords={[`statically`, `purge`, `cache`, `CDNs`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Purge Request
            </h1>
          </div>

          <form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto" name="Purge Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Purge Form" />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <small className="block tracking-wide text-gray-700 text-xs mb-2">We will notify you when the file is purged from CDNs.</small>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="frans@example.com" required />
            </div>
            
            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="role">
                What is your role for this file?
              </label>
              <div className="relative">
                <select className="shadow block appearance-none w-full bg-white border text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" id="role" name="role">
                  <option>Owner</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="url">
                URL(s)
              </label>
              <small className="block tracking-wide text-gray-700 text-xs mb-2"><strong>Important: You will need to specify the full path to the file and include the query string if needed or we will not be able to service your request.</strong> Wildcards are not supported with single URL purge at this time. You can purge up to 30 URLs at a time.</small>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" id="url" name="url" type="text" placeholder="-Submit by including https://cdn.statically.io&#10;-Do not send https://yourdomain.tld or yourdomain.tld&#10;-Make sure it&apos;s an absolute URL&#10;Example: https://cdn.statically.io/img/example.com/cat.jpg" required></textarea>
            </div>

            <div className="mb-4">
              <small className="block tracking-wide text-gray-700 text-xs mb-2"><strong className="font-bold">Privacy note:</strong> This form will trigger Netlify to outgoing webhook Zapier, then Zapier will create a new issue in our private repository on GitHub, the team will review and purge cache for you with our internal CDNs purger software.</small>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
              Submit purge request
            </button>
          </form>

        </section>

      </div>
    </Layout>
  );
}

export default PurgePage;