import React from "react";
import ns1Logo from "../../static/images/sponsors/ns1.svg";
import runcloudLogo from "../../static/images/sponsors/runcloud.svg";
import wp2staticLogo from "../../static/images/sponsors/wp2static.png";
import dewawebLogo from "../../static/images/sponsors/dewaweb.png";

function SponsorPlatinum2() {
  return (
    <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:-ml-6 md:-mr-2 p-1">
        <a
          href="https://ns1.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            className="mx-auto md:mx-0"
            src={ns1Logo}
            alt="NS1"
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
        <a
          href="https://runcloud.io"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            className="max-w-xxs mx-auto"
            src={runcloudLogo}
            alt="RunCloud"
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
        <a
          href="https://wp2static.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            className="wp2static max-w-xxs mx-auto"
            src={wp2staticLogo}
            alt="WP2Static"
          />
        </a>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
        <a
          href="https://www.dewaweb.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            className="dewaweb max-w-xxs mx-auto"
            src={dewawebLogo}
            alt="Dewaweb"
          />
        </a>
      </div>
    </div>
  );
}
export default SponsorPlatinum2;