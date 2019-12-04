import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`statically`]}
      />

      <div className="">

        <section className="text-center mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="inline-block mt-8">
            <img
              className="h-20"
              src={'/images/statically.png'}
            />
          </h2>
        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
          <div className="text-center mb-20">
            <span className="font-bold text-purple-500 uppercase">Our Mission</span>
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Our mission is to make static files easy to manage and fast to deliver.
            </h2>
            <p className="mx-auto text-xl">
              We help files distribution <strong>faster, smaller, reliable, and more efficient</strong> than ever.
            </p>
          </div>

        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-6xl mx-auto px-4 md:px-0">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Our Team
            </h2>
          </div>

          <div className="flex content-center flex-wrap">
            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-6">
              <img className="w-16 h-16 rounded-full md:mx-0 md:mr-4 mb-2" src="https://cdn.statically.io/img/github.com/fransallen.png" />
              <h2 className="text-2xl font-bold">
                Frans Allen
                <img
                  className="w-6 h-6 inline-block rounded-full ml-2 border" src="https://cdn.statically.io/flags/id.png"
                  title="Indonesia"
                />
              </h2>
              <a
                href="https://twitter.com/fransallen"
                className="text-sm text-red-500"
                target="_blank"
              >
                @fransallen
              </a>
              <p className="mt-2">
                Founder of Statically. Has a passion for creating scalable applications and improving developer experience. He loves music and cinematography.
              </p>
            </div>

            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-6">
              <img className="w-16 h-16 rounded-full md:mx-0 md:mr-4 mb-2" src="https://cdn.statically.io/img/image.flaticon.com/icons/svg/149/149452.svg" />
              <h2 className="text-2xl font-bold">
                You
                {/**
                <img
                  className="w-6 h-6 inline-block rounded-full ml-2 border" src="https://cdn.statically.io/flags/us.png"
                  title="Country"
                />
                */}
              </h2>
              <a
                href="/contact"
                className="text-sm text-red-500"
              >
                @ contact us now !!
              </a>
              <p className="mt-2">
               Are you someone who likes speed and security? So you are in the right section, join Statically now, helping us maintain services and guide users to make our services even better.
              </p>
            </div>
          </div>  

        </section>

        <div id="newsletter" className="border-b"></div>

        <section className="mt-20 mb-24 max-w-6xl mx-auto px-4 md:px-0">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Newsletter
            </h2>
            <p className="mx-auto text-xl">
              Don't miss up any news and updates from Statically.
            </p>
          </div>

          <form action="https://marsble.us18.list-manage.com/subscribe/post?u=4dfd4ae04677bf4f6248182fc&id=397ea962f2" className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto" name="Contact Form" method="POST">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="EMAIL" type="text" placeholder="frans@example.com" />
            </div>

             <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
              Submit
            </button>
          </form>

        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
          <div className="flex content-center items-center flex-wrap">
            <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 mx-auto p-4 text-center sm:text-left">
              <h2 className="text-4xl max-w-xl font-bold">Want to contribute for this project?</h2>
            </div>

            <div className="sm:w-1/2 md:w-1/2lg:w-1/2 mb-4 mx-auto p-4 text-center">
              <Link
                to="/support-statically"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Become A Sponsor
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default AboutPage;
