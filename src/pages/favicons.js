import { Link } from "gatsby";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class FaviconsPage extends React.Component {

  createQueryString(data) {
    let results = [], k, v;
    for (k in data) {
      v = data[k];
      v !== "" && results.push(encodeURIComponent(k) + (v === true ? "" : '=' + encodeURIComponent(v)));
    }
    return results.length ? '?' + results.join('&') : "";
  }

  isValidDomain = value => {
    return /^https?:\/\/[^\s\/]+(\.\w+)\/?$/i.test(value);
  }

  setSourceRef = source => {
    this.source = source;
  }

  handleInputChange = e => {
    let {from, to, w, h, output} = this.source;
    let value = from.value.split('?')[0], // Ignore query string URL
        data = {},
        v = output.value;
    v && (data[v] = true);
    to.parentNode.parentNode.classList.remove('hidden');
    to.value = this.isValidDomain(value) ? 'https://cdn.statically.io/favicons/' + value.replace(/^https?:\/\/(.*?)\/?$/, '$1') + this.createQueryString(data) : "";
  }

  hideResultIfEmpty = () => {
    let {from, to, output} = this.source;
    let isValid = this.isValidDomain(from.value);
    to.parentNode.parentNode.classList[isValid ? 'remove' : 'add']('hidden');
    if (isValid) {
      output[0].checked = true;
      this.handleInputChange();
    }
  }

  handleInputPaste = () => {
    setTimeout(() => {
      this.handleInputChange();
      let {to} = this.source;
      to.parentNode.parentNode.classList.add('hidden');
      if (this.isValidDomain(this.source.from.value)) {
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
          title="Favicons"
          keywords={[`statically`]}
        />

        <div className="px-4 py-8 md:p-8">

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <h1 className="text-3xl font-bold inline-block max-w-3xl my-8 p-3">
              An easy way to get favicon from a domain!
            </h1>

            <form className="container mx-auto mb-20 md:w-2/3" onSubmit={this.handleSubmit} ref={this.setSourceRef}>

              <div>
                <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-3 px-5 block w-full appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center text-lg" id="e:from" name="from" type="text" onChange={this.hideResultIfEmpty} onPaste={this.handleInputPaste} placeholder="Insert your desired website domain here&hellip;" />
              </div>

              <div className="mt-4 hidden">

                <div>
                  <label className="font-bold" htmlFor="e:to">Use this URL in production:</label>
                  <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl text-center" id="e:to" name="to" type="text" />
                </div>

                <h3 className="mt-6 mb-6 pt-4 border-t font-semibold text-xl text-center">Common Settings</h3>

                <div className="text-center -mx-3">
                  <div className="inline-flex items-center">
                    <label className="flex items-center h-4 mx-3">
                      <input className="mr-2" name="output" onChange={this.handleInputChange} type="radio" value="" />
                      <span>As Image</span>
                    </label>
                    <label className="flex items-center h-4 mx-3">
                      <input className="mr-2" name="output" onChange={this.handleInputChange} type="radio" value="json" />
                      <span>As JSON</span>
                    </label>
                    <label className="flex items-center h-4 mx-3">
                      <input className="mr-2" name="output" onChange={this.handleInputChange} type="radio" value="blob" />
                      <span>As Blob</span>
                    </label>
                  </div>
                  <p className="w-full mx-3 mt-4 text-left text-sm text-gray-600">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>

              </div>
            </form>
          </section>

          <section className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0">
            <div className="flex content-center flex-wrap">
              <div className="w-full md:w-1/3 mb-3 max-w-lg overflow-hidden mx-auto text-left md:text-right">
                <p className="text-lg">
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
                <p className="my-4">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="w-full md:w-2/3 mb-3 max-w-lg overflow-hidden mx-auto text-left">
                <ul className="ml-8 list-disc">
                  <li>No traffic limits or throttling. Files are served via super fast global CDN.</li>
                  <li>Favicon are cached in your browser for 24 hours.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    );
  }

}

export default FaviconsPage;