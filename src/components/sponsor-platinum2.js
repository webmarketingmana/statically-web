import React from "react";

function SponsorPlatinum2() {
  return (
    <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:ml-2 md:-mr-10 p-1">
        <a
          href="https://ns1.com"
          className="sponsors-logo"
          rel="noopener noreferrer" target="_blank"
        >
          <img
            className="ns1 mx-auto md:mx-0"
            src={'/images/sponsors/ns1.png'}
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
            src={'/images/sponsors/runcloud.svg'}
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
            src={'/images/sponsors/wp2static.png'}
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
            src={'/images/sponsors/dewaweb.png'}
            alt="Dewaweb"
          />
        </a>
      </div>
    </div>
  );
}
export default SponsorPlatinum2;