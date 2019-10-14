import { Link } from "gatsby";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ImgpxPage extends React.Component {

  createQueryString(data) {
    let results = [], k, v;
    for (k in data) {
      v = data[k];
      v !== "" && results.push(encodeURIComponent(k) + (v === true ? "" : '=' + encodeURIComponent(v)));
    }
    return results.length ? '?' + results.join('&') : "";
  }

  isValidImageLink = value => {
    return /^https?:\/\/\S+\.(gif|png|jpe?g)$/i.test(value.split('?')[0]); // Ignore query string URL
  }

  setSourceRef = source => {
    this.source = source;
  }

  handleInputChange = () => {
    let {from, to, w, h, filter} = this.source;
    let value = from.value.split('?')[0], // Ignore query string URL
        data = {};
    data.w = w.value;
    data.h = h.value;
    data.filter = filter.checked ? filter.value : "";
    to.parentNode.parentNode.classList.remove('hidden');
    to.value = this.isValidImageLink(value) ? 'https://cdn.statically.io/img/' + value.replace(/^https?:\/\//, "") + this.createQueryString(data) : "";
  }

  hideResultIfEmpty = () => {
    let {from, to} = this.source;
    let isValid = this.isValidImageLink(from.value);
    to.parentNode.parentNode.classList[isValid ? 'remove' : 'add']('hidden');
    if (isValid) {
      this.handleInputChange();
    }
  }

  handleInputPaste = () => {
    setTimeout(() => {
      this.handleInputChange();
      let {to} = this.source;
      to.parentNode.parentNode.classList.add('hidden');
      if (this.isValidImageLink(this.source.from.value)) {
        to.parentNode.parentNode.classList.remove('hidden');
        to.focus();
        to.select();
      }
    }, 0);
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Imgpx"
          keywords={[`statically`]}
        />

        <div className="px-4 py-8 md:p-8">

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <h1 className="text-3xl font-bold inline-block max-w-3xl my-8 p-3">
              Image acceleration and modification service via custom endpoints.
            </h1>

            <form className="container mx-auto mb-20 md:w-2/3" onSubmit={this.handleSubmit} ref={this.setSourceRef}>

              <div>
                <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-3 px-5 block w-full appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center text-lg" id="e:from" name="from" type="text" onChange={this.hideResultIfEmpty} onPaste={this.handleInputPaste} placeholder="Paste an image URL here!" />
              </div>

              <div className="mt-4 hidden">

                <div>
                  <label className="font-bold" htmlFor="e:to">Use this URL in production:</label>
                  <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl text-center" id="e:to" name="to" type="text" />
                </div>

                <h3 className="mt-6 mb-6 pt-4 border-t font-semibold text-xl text-center">Common Settings</h3>

                <div className="flex flex-wrap -mx-3 text-left">
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-xs font-bold" htmlFor="e:w">
                      Width
                    </label>
                    <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl" id="e:w" name="w" placeholder="72" onChange={this.handleInputChange} type="text" />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mt-4 md:mt-0">
                    <label className="block tracking-wide text-xs font-bold" htmlFor="e:h">
                      Height
                    </label>
                    <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl" id="e:h" name="h" placeholder="72" onChange={this.handleInputChange} type="text" />
                  </div>
                  <div className="mx-3 mt-4">
                    <label className="flex items-center h-4">
                      <input className="mr-2" name="filter" onChange={this.handleInputChange} type="checkbox" value="grayscale" />
                      <span>Grayscale</span>
                    </label>
                  </div>
                  <p className="w-full mx-3 mt-4 text-sm text-gray-600">
                    Imgpx has support for several URL parameters to modify the image output. Setting up image output&rsquo;s width and height dimension is just the basic. Discover the complete features in the <a className="text-gray-700" href="">documentation page</a>. Please note that any query strings from the original image URL will be ignored.
                  </p>
                </div>

              </div>
            </form>
          </section>

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <div className="flex content-center flex-wrap">
              <div className="w-full md:w-1/3 mb-3 max-w-lg overflow-hidden mx-auto text-left md:text-right">
                <p className="text-lg">
                  Serve your website images fast, auto-webp, and compressed for the best experience of static files.
                </p>
                <p className="my-4">
                  <Link
                    to="/"
                    className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Try Custom URL
                  </Link>
                </p>
              </div>
              <div className="w-full md:w-2/3 mb-3 max-w-lg overflow-hidden mx-auto text-left">
                <ul className="ml-8 list-disc">
                  <li>Serves images with sizes up to 60 MB.</li>
                  <li>No traffic limits or throttling. Files are served via super fast global CDN.</li>
                  <li>Supported Content-Type: PNG, JPG, GIF, BMP (Coming soon: Support for SVG).</li>
                  <li>Files are cached in the browser for 1 year.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    );
  }

}

export default ImgpxPage;