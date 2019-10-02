import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Integrations from "../components/integrations";
import Solutions from "../components/solutions";
import Reviews from "../components/reviews";
import FAQs from "../components/faqs";
import Social from "../components/social";

const STATICALLY_PASTE_DATA = {
  // Debug
  'https?:\\/\\/cdn\\.staticall?y\\.(?:com|io)\\/\\S+': (to, value) => {
    let inspector = to.parentNode.parentNode.nextElementSibling;
    inspector.classList.remove('hidden');
    to.parentNode.parentNode.classList.add('hidden');
    inspector.innerHTML = 'Debugging URL\u2026';
    value && fetch('https://apis.marsble.com/http2/v1/check?api_key=1fdba1ef633460c72972aaa993d61b&url=' + value).then(response => {
      if (!response.ok) {
        inspector.innerHTML = 'Failed to fetch data from Marsble API.';
        return;
      }
      return response.json();
    }).then(json => {
      let headers = json.raw,
          out = '<strong>HTTP2: ' + (json.http2 ? 'Yes' : 'No') + '</strong>', i;
      for (i in headers) {
        out += '\n' + headers[i];
      }
      inspector.innerHTML = out;
    });
    return "";
  },
  'https?:\\/\\/raw\\.github(?:usercontent)?\\.com\\/([^\\/]+)\\/([^\\/]+)\\/([^\\/]+)\\/(.+)': 'https://cdn.statically.io/gh/$1/$2/$3/$4',
  'https?:\\/\\/github\\.com\\/([^\\/]+)\\/([^\\/]+)\\/(?!releases\\/)(?:(?:blob|raw)\\/)?([^\\/]+)\\/(.+)': (to, value, m1, m2, m3, m4) => {
    to.parentNode.parentNode.classList.remove('hidden');
    if (m3 === 'master') {
      fetch('https://api.github.com/repos/' + m1 + '/' + m2 + '/commits/' + m3)
        .then(response => response.json())
          .then(json => {
        let hash = json.sha && json.sha.slice(0, 8);
        if (hash) {
          to.value = 'https://cdn.statically.io/gh/' + m1 + '/' + m2 + '/' + hash + '/' + m4;
          to.focus();
          to.select();
        }
      });
      return 'Fetching URL\u2026';
    }
    return 'https://cdn.statically.io/gh/' + m1 + '/' + m2 + '/' + m3 + '/' + m4;
  },
  'https?:\\/\\/gist\\.github\\.com\\/([^\\/\\s]+)\\/([^?&#]+)': (to, value, m1, m2) => {
    to.parentNode.parentNode.classList.remove('hidden');
    fetch('https://api.github.com/gists/' + m2)
      .then(response => response.json())
        .then(json => {
      let files = json.files,
          f = Object.keys(files),
          link = files[f[0]] && files[f[0]].raw_url;
      if (link) {
        to.value = link.replace(new RegExp('^https?:\\/\\/gist\\.githubusercontent\\.com\\/(\\S+)$'), 'https://cdn.statically.io/gist/$1');
        to.focus();
        to.select();
      }
    });
    return 'Fetching URL\u2026';
  },
  'https?:\\/\\/gist\\.githubusercontent\\.com\\/(\\S+)': 'https://cdn.statically.io/gist/$1',
  'https?:\\/\\/gitlab\\.com\\/([^\\/]+\\/[^\\/]+)\\/(?:raw|blob)\\/(.+\\..+?)(?:\\?.*)?': 'https://cdn.statically.io/gl/$1/$2',
  'https?:\\/\\/bitbucket\\.org\\/([^\\/]+\\/[^\\/]+)\\/(?:raw|src)\\/(.+\\..+?)(?:\\?.*)?': 'https://cdn.statically.io/bb/$1/$2'
};

class IndexPage extends React.Component {

  setSourceRef = source => {
    this.source = source;
  }

  handleInputChange = () => {
    let {from, to} = this.source;
    let value = from.value,
        tasks = STATICALLY_PASTE_DATA, i, m, r;
    to.parentNode.parentNode.classList.add('hidden');
    to.parentNode.parentNode.nextElementSibling.classList.add('hidden');
    for (i in tasks) {
      if (m = value.match(r = new RegExp('^' + i + '$'))) {
        if (typeof tasks[i] === "function") {
          m.unshift(to);
          to.value = tasks[i].apply(to, m);
        } else {
          to.value = value.replace(r, tasks[i]);
          setTimeout(() => {
            to.parentNode.parentNode.classList.remove('hidden');
            to.focus();
            to.select();
          }, 10);
        }
        break;
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`statically`, `open source`, `cdn`, `github`]}
        />

        <div className="px-4 py-8">

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <h1 className="text-3xl font-bold inline-block max-w-3xl my-8 p-3">
              A free, fast, &amp; modern CDN for open source projects, WordPress, images, and any static assets.
            </h1>

            <form className="container mx-auto mb-20 md:w-2/3" onSubmit={this.handleSubmit} ref={this.setSourceRef}>
              <div>
                <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-3 px-5 block w-full appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center text-lg" id="e:from" name="from" type="text" onChange={this.handleInputChange} onPaste={this.handleInputChange} placeholder="Paste a GitHub, GitLab, Bitbucket file, or Gist URL here!" />
              </div>
              <div className="mt-4 hidden">
                <div>
                  <label className="font-bold" htmlFor="e:to">Use this URL in production:</label>
                  <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl text-center" id="e:to" name="to" type="text" />
                </div>
              </div>
              <pre className="font-monospace text-sm text-left bg-gray-200 p-4 rounded mt-8 overflow-auto hidden"></pre>
            </form>

            <div className="flex content-center flex-wrap">
              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Built for developers</div>
                  <p className="text-gray-700 text-base">
                    Works with any static assets, support various modification, and optimization.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Unlimited traffics</div>
                  <p className="text-gray-700 text-base">
                    No traffic limits or throttling. Files are served via super fast global CDNs.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Push to serve</div>
                  <p className="text-gray-700 text-base">
                    Integrated with your favorite tools: GitHub, GitLab, Bitbucket, and WordPress SVN.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="italic mb-5">
                Proudly empowered by <strong>world-class</strong> CDN companies
              </h3>

              <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 md:ml-3 md:mr-2 p-1">
                  <a
                    href="https://www.cdn77.com"
                    className="sponsors-logo"
                  >
                    <img
                      src={'images/sponsors/cdn77.svg'}
                    />
                  </a>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                  <a
                    href="https://bunnycdn.com"
                    className="sponsors-logo"
                  >
                    <img
                      src={'images/sponsors/bunnycdn.svg'}
                    />
                  </a>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:-mr-3 p-1">
                  <a
                    href="https://www.fastly.com"
                    className="sponsors-logo"
                  >
                    <img
                      src={'images/sponsors/fastly.svg'}
                    />
                  </a>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                  <a
                    href="https://www.cloudflare.com"
                    className="sponsors-logo"
                  >
                    <img
                      src={'images/sponsors/cloudflare.svg'}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
            <div className="text-center mb-20">
              <h2 className="max-w-lg font-extrabold text-5xl mx-auto mb-5">
                Everything you need to serve static assets.
              </h2>
              <p className="max-w-2xl mx-auto text-xl">
                Serve your open source files quickly, without having to manually configure DNS, SSL, CDN or hosting. Apply various image transformations and manipulations just on the spot.
              </p>
            </div>

            <div className="flex content-center flex-wrap">
              <Link
                to="/network"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-ml-6"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 max-w-xxs">
                    Fast &amp; secure, from any location
                  </div>
                  <p className="text-gray-700 text-base">
                    Combining 4 CDN providers into one and pick the fastest for your location.
                  </p>
                </div>
              </Link>

              <Link
                to="/features"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 max-w-xxs">
                    On-the-fly optimization
                  </div>
                  <p className="text-gray-700 text-base">
                    Optimize static assets on-the-fly only with URL. Auto-webp, resize, crop, filter for images.
                  </p>
                </div>
              </Link>

              <Link
                to="/github"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-mr-6">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 max-w-xxs">
                    Developer friendly
                  </div>
                  <p className="text-gray-700 text-base">
                    Loads files from git repositories right away with no setup.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-lg mx-auto px-4 md:px-0">
            <div className="text-center mb-10">
              <h2 className="font-extrabold text-5xl mx-auto mb-5">
                Integrations
              </h2>
              <p className="text-xl">
                All your favourite apps and tools, integrated with Statically
              </p>
            </div>

            <Integrations />

          </section>

          <div className="border-b"></div>

          <Solutions />

          <div className="border-b"></div>

          <Reviews />

          <div className="border-b"></div>

          <FAQs />

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
            <h3 className="text-center italic mb-5">
              Supported by
            </h3>

            <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://www.dediserve.com"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/dediserve.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://runcloud.io"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/runcloud.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://updown.io"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/updownio.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://ns1.com"
                  className="sponsors-logo"
                >
                  <img
                    className="ns1 mx-auto md:mx-0"
                    src={'images/sponsors/ns1.png'}
                  />
                </a>
              </div>
            </div>
          </section>

          <div className="border-b"></div>

          <Social />
        </div>
      </Layout>
    );
  }

}

export default IndexPage;
