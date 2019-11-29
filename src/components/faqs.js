import { Link } from "gatsby";
import React from "react";

class FAQs extends React.Component {

  setFirstAccordionHeaderRef = header => {
    this.firstAccordionHeader = header;
  }

  handleAccordionChange = e => {
    let toggle = e.currentTarget,
        icon = toggle.querySelector('svg polyline'),
        pane = toggle.nextElementSibling,
        parent = toggle.parentNode.parentNode,
        parents = parent.parentNode.children;
    // Collapse all
    for (let i = 0, j = parents.length; i < j; ++i) {
        let header = parents[i].querySelector('header'),
            icon = header.querySelector('svg polyline');
        icon.setAttribute('stroke', '#606F7B');
        icon.setAttribute('points', '6 9 12 15 18 9');
        header.nextElementSibling.style.height = '0px';
        header.parentNode.classList.add('border-transparent');
        header.parentNode.classList.remove('border-indigo');
    }
    // Expand this
    toggle.parentNode.classList.add('border-indigo');
    toggle.parentNode.classList.remove('border-transparent');
    icon.setAttribute('stroke', '#606F7B'); // Just in case you want to change the icon color for active panel
    icon.setAttribute('points', '18 15 12 9 6 15');
    pane.style.height = pane.scrollHeight + 'px';
  }

  componentDidMount() {
    // Expand first pane on ready
    this.handleAccordionChange({
      currentTarget: this.firstAccordionHeader
    });
  }

  render() {
    return (
      <section className="mt-20 mb-32 max-w-2xl mx-auto">
        <h2 className="text-center font-extrabold text-5xl mx-auto mb-20">
          Frequently Asked Questions
        </h2>

        <div className="accordion">
          <article className="border-t border-b">
            <div className="border-l-2 bg-grey-lightest border-transparent">
              <header className="flex justify-between items-center py-5 px-8 cursor-pointer select-none" onClick={this.handleAccordionChange} ref={this.setFirstAccordionHeaderRef}>
                <span className="text-grey-darkest font-thin text-xl">
                  What is Statically?
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                  {/* icon by feathericons.com */}
                  <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div>
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <p>Statically is a new kind of next generation CDN. Statically support for various modification, and optimization out of the box so you can load your static files fully control and faster.</p>
                </div>
              </div>
            </div>
          </article>
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-transparent">
              <header className="flex justify-between items-center py-5 px-8 cursor-pointer select-none" onClick={this.handleAccordionChange}>
                <span className="text-indigo font-thin text-xl">
                  How can Statically be different from other open source CDN?
                </span>
                <div className="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                  {/* icon by feathericons.com */}
                  <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div>
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <ul className="pl-4">
                    <li class Name="pb-2">
                      Lorem ipsum dolor sit amet.
                    </li>
                    <li className="pb-2">
                      Lorem ipsum dolor sit amet.
                    </li>
                    <li className="pb-2">
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="border-b">
            <div className="border-l-2 border-transparent">
              <header className="flex justify-between items-center py-5 px-8 cursor-pointer select-none" onClick={this.handleAccordionChange}>
                <span className="text-grey-darkest font-thin text-xl">
                  What can I serve to Statically?
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                  {/* icon by feathericons.com */}
                  <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div>
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <p>Accordion content.</p>
                </div>
              </div>
            </div>
          </article>
          <article className="border-b">
            <div className="border-l-2 border-transparent">
              <header className="flex justify-between items-center py-5 px-8 cursor-pointer select-none" onClick={this.handleAccordionChange}>
                <span className="text-grey-darkest font-thin text-xl">
                  Is Statically free?
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                  {/* icon by feathericons.com */}
                  <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div>
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <p>Yes. Statically is free for everyone to use. We make profits from <Link className="text-red-500" to="/sponsors">our sponsors</Link>, custom domain services, <Link className="text-red-500" to="/shop">t-shirts</Link>, and <Link className="text-red-500" to="/support-statically">users&rsquo; donation</Link>.</p>
                </div>
              </div>
            </div>
          </article>
        </div>

      </section>
    );
  }

}

export default FAQs;