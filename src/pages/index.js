import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Integrations from "../components/integrations";
import Solutions from "../components/solutions";
//import Reviews from "../components/reviews";
//import FAQs from "../components/faqs";
import Social from "../components/social";
import SponsorPlatinum from "../components/sponsor-platinum";
import SponsorPlatinum2 from "../components/sponsor-platinum2";

const STATICALLY_PASTE_DATA = {
  // Debug
  'https?:\\/\\/cdn\\.staticall?y\\.(?:com|io)\\/\\S+': (to, value) => {
    let inspector = to.parentNode.parentNode.nextElementSibling;
    inspector.classList.remove('hidden');
    to.parentNode.parentNode.classList.add('hidden');
    inspector.innerHTML = 'Debugging URL\u2026';
    value && fetch('https://api.statically.io/analytics/headers?uri=' + value).then(response => {
      if (!response.ok) {
        inspector.innerHTML = 'Failed to fetch data from Statically API.';
        return;
      }
      return response.json();
    }).then(json => {
      let headers = json.headers,
          out = '', i;
      for (i in headers) {
        out += headers[i] + '\n';
      }
      inspector.innerHTML = out;
    });
    return "";
  },
  'https?:\\/\\/(.+?)\\.github\\.(?:com|io)\\/([^\\/]+)(\\/?|\\/[^?&#]+)(.*)': (to, value, m1, m2, m3, m4) => {
    to.parentNode.parentNode.classList.remove('hidden');
    fetch('https://api.statically.io/gh/repos/' + m1 + '/' + m2 + '/commits/master')
      .then(response => response.json())
        .then(json => {
      let hash = json.sha && json.sha.slice(0, 8);
      if (hash) {
        // TODO: Detect path `./path/to/page` that maps to `./path/to/page.html`
        to.value = 'https://cdn.statically.io/gh/' + m1 + '/' + m2 + '/' + hash + (!m3 || m3 === '/' ? '/index.html' : m3) + m4;
        to.focus();
        to.select();
      }
    });
    return 'Fetching URL\u2026';
  },
  'https?:\\/\\/raw\\.github(?:usercontent)?\\.com\\/([^\\/]+)\\/([^\\/]+)\\/([^\\/]+)\\/([^?&#]+)': 'https://cdn.statically.io/gh/$1/$2/$3/$4',
  'https?:\\/\\/github\\.com\\/([^\\/]+)\\/([^\\/]+)\\/(?!releases\\/)(?:(?:blob|raw)\\/)?([^\\/]+)\\/([^?&#]+)': (to, value, m1, m2, m3, m4) => {
    to.parentNode.parentNode.classList.remove('hidden');
    if (m3 === 'master') {
      fetch('https://api.statically.io/gh/repos/' + m1 + '/' + m2 + '/commits/' + m3)
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
    fetch('https://api.statically.io/gh/gists/' + m2)
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
  'https?:\\/\\/bitbucket\\.org\\/([^\\/]+\\/[^\\/]+)\\/(?:raw|src)\\/(.+\\..+?)(?:\\?.*)?': 'https://cdn.statically.io/bb/$1/$2',
  'https?:\\/\\/core\\.svn\\.wordpress\\.org\\/tags\\/(.+\\..+?)(?:\\?.*)?': 'https://cdn.statically.io/wp/c/$1',
  'https?:\\/\\/plugins\\.svn\\.wordpress\\.org\\/([^\\/]+)\\/tags\\/(.+\\..+?)(?:\\?.*)?': 'https://cdn.statically.io/wp/p/$1/$2',
  'https?:\\/\\/themes\\.svn\\.wordpress\\.org\\/(\\S+)': 'https://cdn.statically.io/wp/t/$1',
  'https?:\\/\\/(?:cdn.)?rawgit(?:hub)?\\.com\\/(\\S+)': 'https://cdn.statically.io/gh/$1',
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
      if ((m = value.match(r = new RegExp('^' + i + '$')))) {
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
          title="Statically - The free optimization &amp; CDN for images, CSS, JavaScript, and more"
          keywords={[`statically`, `open source`, `cdn`, `github`]}
        />

        <div className="px-4 py-8">

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <h1 className="text-4xl font-bold inline-block max-w-3xl mt-8 mb-4">
              The free optimization &amp; CDN for images, CSS, JavaScript, and more
            </h1>

            <form className="container mx-auto mb-5 md:w-2/3" onSubmit={this.handleSubmit} ref={this.setSourceRef}>
              <div className="highlighted-form">
                <input className="bg-white focus:outline-none rounded-lg py-3 px-5 block w-full appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center text-lg" id="e:from" name="from" type="text" onChange={this.handleInputChange} onPaste={this.handleInputChange} placeholder="https://github.com/:user/:repo/blob/:tag/:file" title="Paste a file URL from repository here!"/>
              </div>
              <div className="mt-4 hidden">
                <div>
                  <label className="font-bold" htmlFor="e:to">Use this URL in production:</label>
                  <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl text-center" id="e:to" name="to" type="text" />
                </div>
              </div>
              <pre className="font-monospace text-sm text-left bg-gray-200 p-4 rounded mt-8 overflow-auto hidden"></pre>
            </form>

            <div className="text-sm text-gray-700" title="Usage: /gh/:user/:repo/:tag/:file.js -&gt; /gh/:user/:repo/:tag/:file.min.js"><strong>ProTip:</strong> Add <code className="font-bold text-gray-900">.min</code> to URL of <strong>CSS</strong>, <strong>JS</strong>, <strong>SVG</strong>, <strong>HTML</strong>, and <strong>XML</strong> files to get a minified version.</div>

            <div className="flex content-center flex-wrap mt-16">
              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Built for developers</div>
                  <p className="text-gray-900 text-base">
                    Works with any static assets, supports modification and optimization.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Unlimited traffic</div>
                  <p className="text-gray-900 text-base">
                    No traffic limits or throttling. Files are served via super fast global CDNs.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Push to serve</div>
                  <p className="text-gray-900 text-base">
                    Integrated with your favorite tools: GitHub, GitLab, Bitbucket, and WordPress SVN.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="mb-5">
                Proudly powered by <strong>world-class</strong> CDN companies
              </h3>

              <SponsorPlatinum />
            </div>
          </section>

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
            <div className="text-center mb-20">
              <h2 className="max-w-lg font-extrabold text-5xl mx-auto mb-5">
                Everything you need to serve static assets.
              </h2>
              <p className="max-w-2xl mx-auto text-xl">
                Serve your open source files quickly, without having to manually configure DNS, SSL, CDN or hosting. Apply image transformation and filters directly.
              </p>
            </div>

            <div className="flex content-center flex-wrap text-center">
              <Link
                to="/features"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Fast &amp; secure, anywhere
                  </div>
                  <p className="text-gray-900 text-base">
                    4 CDN providers combined into one, picking the fastest for your location.
                  </p>
                </div>
              </Link>

              <Link
                to="/features"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    On-the-fly optimization
                  </div>
                  <p className="text-gray-900 text-base">
                    Automatic CSS and JS minifier + image resize, crop, filter, webp, and more.
                  </p>
                </div>
              </Link>

              <Link
                to="/docs"
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Developer friendly
                  </div>
                  <p className="text-gray-900 text-base">
                    Loads files from your git repositories right away with no setup.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-lg mx-auto px-4 md:px-0">
            <div className="text-center mb-10">
              <h2 className="font-extrabold text-5xl mx-auto mb-5">
                Fits your workflow
              </h2>
              <p className="text-xl">
                All your favorite apps and tools, integrated with Statically
              </p>
            </div>

            <Integrations />

          </section>

          <div className="border-b"></div>

          <Solutions />

          <div className="border-b"></div>

          <section className="mt-20 mb-24 max-w-4xl mx-auto px-4 md:px-0">
            <h3 className="text-center mb-5">
              Supported by
            </h3>

            <SponsorPlatinum2 />
          </section>

          <div className="border-b"></div>

          <Social />
        </div>
      </Layout>
    );
  }

}

export default IndexPage;
