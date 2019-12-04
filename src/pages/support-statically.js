import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SponsorPlatinum from "../components/sponsor-platinum";
import SponsorPlatinum2 from "../components/sponsor-platinum2";

function SupportStaticallyPage() {
  return (
    <Layout>
      <SEO
        title="Support Statically"
        description="Sponsor Statically and have your company logo placed on this website."
        keywords={[`statically`, `sponsorship`, `partnership`]}
      />

      <div className="px-4 py-8 md:p-8">
        {/**
        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Support Statically development!
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>
        */}

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Become A Sponsors
            </h1>
            <p className="text-lg mx-auto">
              Exclusively sponsor Statically and have your company logo placed on this website.
            </p>

            <div className="sponsor-platinum mt-10">
              <h3 className="text-2xl font-bold mb-5">Platinum</h3>

              <SponsorPlatinum />

              <SponsorPlatinum2 />
            </div>

            <div className="sponsor-gold mt-10">
              <h3 className="text-2xl font-bold mb-5">Gold</h3>

              <div className="content-center items-center max-w-xl mx-auto">
                <a
                  href="https://uptimerobot.com"
                  className="sponsors-logo"
                  target="_blank"
                >
                  <img
                    className="m-auto"
                    src={'/images/sponsors/uptimerobot.png'}
                  />
                </a>
              </div>
            </div>

            <div className="sponsor-bronze mt-10">
              <h3 className="text-2xl font-bold mb-5">Bronze</h3>

              <div class="flex content-center items-center max-w-2xl mx-auto flex-wrap">
                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
                  <a
                    href="https://www.netlify.com"
                    className="sponsors-logo"
                    target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={'/images/sponsors/netlify.svg'}
                    />
                  </a>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
                  <a
                    href="https://www.statuspage.io"
                    className="sponsors-logo"
                    target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={'/images/sponsors/statuspageio.svg'}
                    />
                  </a>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
                  <a
                    href="https://www.cloudkilat.com"
                    className="sponsors-logo"
                    target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={'/images/sponsors/cloudkilat.png'}
                    />
                  </a>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
                  <a
                    href="https://cleanbrowsing.org"
                    className="sponsors-logo"
                    target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={'/images/sponsors/cleanbrowsing.png'}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <a
                href="/become-a-sponsor-submission"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Become A Sponsor
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default SupportStaticallyPage;