import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SponsorPlatinum from "../components/sponsor-platinum";
import SponsorPlatinum2 from "../components/sponsor-platinum2";
import cleanbrowsingLogo from "../../static/images/sponsors/cleanbrowsing.png";
import uptimerobotLogo from "../../static/images/sponsors/uptimerobot.png";
import cloudkilatLogo from "../../static/images/sponsors/cloudkilat.png";

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

            <div className="sponsor-platinum mt-20">
              <h3 className="text-2xl font-bold mb-10">Platinum</h3>

              <SponsorPlatinum />

              <SponsorPlatinum2 />
            </div>

            <div className="sponsor-bronze mt-20">
              <h3 className="text-2xl font-bold mb-10">Bronze</h3>

              <div className="flex content-center items-center max-w-2xl mx-auto flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                  <a
                    href="https://cleanbrowsing.org"
                    className="sponsors-logo"
                    rel="noopener noreferrer" target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={cleanbrowsingLogo}
                      alt="CleanBrowsing"
                    />
                  </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                  <a
                    href="https://uptimerobot.com"
                    className="sponsors-logo"
                    rel="noopener noreferrer" target="_blank"
                  >
                    <img
                      className="max-w-xss m-auto"
                      src={uptimerobotLogo}
                      alt="Uptime Robot"
                    />
                  </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                  <a
                    href="https://www.cloudkilat.com"
                    className="sponsors-logo"
                    rel="noopener noreferrer" target="_blank"
                  >
                    <img
                      className="max-w-xxs mx-auto"
                      src={cloudkilatLogo}
                      alt="CloudKilat"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-24">
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