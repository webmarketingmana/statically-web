import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Regular from "@fortawesome/free-regular-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';

import Layout from "../components/layout";
import SEO from "../components/seo";

function WordpressPage() {
  return (
    <Layout>
      <SEO
        title="WordPress Integration"
        description="Loads file from WordPress fully optimized and deliver fast with the right of content type."
        keywords={[`statically`, `wordpress`, `integration`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              WordPress + Statically
            </h1>
            <p className="text-lg mx-auto">
              Finally here! CDN that is optimized for the needs of WordPress based websites.
            </p>
          </div>

          <section className="mt-20 max-w-4xl mx-auto px-8 lg:px-0">
            <div className="flex flex-wrap mb-16 items-center">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-20 sm:mb-0">
                <h2 className="font-bold text-4xl md:max-w-sm mb-5">
                  WordPress, optimized!
                </h2>
                <p className="text-lg">
                  Minify CSS and javascript, optimize and add transformation ability for image, cache them and deliver faster.
                </p>
              </div>

              <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 m-auto">
                <a href="#">
                  <div className="w-32 rounded overflow-hidden border border-gray-200 border-solid shadow-lg mx-auto text-center px-6 py-4 mb-2" title="Your WordPress site">
                    <FontAwesomeIcon
                      icon={Brands.faWordpress}
                      className="integration-logo mx-auto"
                    />
                    <span className="text-sm mt-5">WordPress</span>
                  </div>
                </a>

                <div id="statically-to-you">
                  <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

                  <img
                    src="//cdn.statically.io/img/statically.io/images/statically.png?w=80"
                    className="integration-logo mx-auto my-2"
                    alt="Statically"
                    title="Statically optimizing files"
                  />

                  <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

                  <div className="text-center mt-2">
                    <FontAwesomeIcon
                      icon={Regular.faUser}
                      className="integration-logo mx-auto mb-1"
                      title="Optimized version of static files delivered to you!"
                    />
                    <span>You</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex content-center flex-wrap">
              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-ml-6">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Install plugin</div>
                  <p className="text-gray-700 text-base">
                    <a className="font-bold text-green-700" href="/wordpress/statically.zip">Download</a> and upload plugin to your WordPress site.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Generate API Key</div>
                  <p className="text-gray-700 text-base">
                    <span className="font-bold">Tell Statically</span> to serve your domain.
                  </p>
                </div>
                <svg width="20" height="30" viewBox="0 0 20 30" className="fetch green"><path d="M10 40 L10 -10"></path></svg>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-mr-6">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Activate plugin</div>
                  <p className="text-gray-700 text-base">
                    <span className="font-bold">Save settings</span> to make your WordPress site optimized.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <form action="https://api.statically.io/integrations/wordpress" className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto" name="WordPress" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="WordPress" />
            <input type="hidden" name="api-key" value="" />

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="frans@example.com" required />
            </div>
            
            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="domain">
                Domain
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="domain" name="domain" type="text" placeholder="blog.example.com" required />
            </div>

            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="role">
                What is your role for this website?
              </label>
              <div className="relative">
                <select className="shadow block appearance-none w-full bg-white border text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" id="role" name="role">
                  <option>Owner</option>
                  <option>Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-1" htmlFor="category">
                Category
              </label>
              <div className="relative">
                <select className="shadow block appearance-none w-full bg-white border text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" id="category" name="category">
                  <option>Personal</option>
                  <option>Business</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
              Generate API Key
            </button>
          </form>
        </section>

      </div>
    </Layout>
  );
}

export default WordpressPage;