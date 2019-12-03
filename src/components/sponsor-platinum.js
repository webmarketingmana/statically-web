import React from "react";

function SponsorPlatinum() {
  return (
    <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 md:ml-3 md:mr-2 p-1">
        <a
          href="https://www.cdn77.com"
          className="sponsors-logo"
        >
          <img
            src={'/images/sponsors/cdn77.svg'}
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
        <a
          href="https://bunnycdn.com"
          className="sponsors-logo"
        >
          <img
            src={'/images/sponsors/bunnycdn.svg'}
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:-mr-3 p-1">
        <a
          href="https://www.fastly.com"
          className="sponsors-logo"
        >
          <img
            src={'/images/sponsors/fastly.svg'}
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
        <a
          href="https://www.cloudflare.com"
          className="sponsors-logo"
        >
          <img
            src={'/images/sponsors/cloudflare.svg'}
          />
        </a>
      </div>
    </div>
  );
}

export default SponsorPlatinum;