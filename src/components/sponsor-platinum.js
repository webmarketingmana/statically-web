import React from "react";
import fastlyLogo from "../../static/images/sponsors/fastly.svg";
import cloudflareLogo from "../../static/images/sponsors/cloudflare.svg";
import bunnycdnLogo from "../../static/images/sponsors/bunnycdn.svg";
import cdn77Logo from "../../static/images/sponsors/cdn77.svg";

function SponsorPlatinum() {
  return (
    <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:-mr-3 p-1">
        <a
          href="https://www.fastly.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            src={fastlyLogo}
            alt="Fastly"
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
        <a
          href="https://www.cloudflare.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            src={cloudflareLogo}
            alt="Cloudflare"
          />
        </a>
      </div>
      
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
        <a
          href="https://bunnycdn.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            src={bunnycdnLogo}
            alt="BunnyCDN"
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 md:ml-3 md:mr-2 p-1">
        <a
          href="https://www.cdn77.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            src={cdn77Logo}
            alt="CDN77"
          />
        </a>
      </div>
    </div>
  );
}

export default SponsorPlatinum;