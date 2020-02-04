import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data."
        keywords={[`statically`, `privacy`]}
      />

      <div className="max-w-2xl mx-auto px-4 md:px-0">

        <section className="mt-20 mb-24 text-center">

          <h1 className="font-bold text-5xl">Privacy Policy</h1>
          <p className="my-4"><strong className="font-semibold">Effective Date:</strong> 2019/12/03</p>

        </section>

        <section className="mt-20 mb-24">

          <p className="my-4 text-lg text-gray-700">Statically (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the staticaly.com, statically.io website (hereinafter referred to as the &ldquo;Service&rdquo;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          <p className="my-4">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <Link className="text-red-500" to="/">https://statically.io</Link></p>
          <h3 className="font-bold text-2xl">Information Collection And Use</h3>
          <p className="my-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          <h4 className="font-bold text-xl">Types of Data Collected</h4>
          <h5 className="font-bold mt-4">Personal Data</h5>
          <p className="my-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&ldquo;Personal Data&rdquo;). Personally identifiable information may include, but is not limited to:</p>
          <ul className="my-4 ml-8 list-disc">
            <li>Usage Data</li>
          </ul>
          <h5 className="font-bold">Usage Data</h5>
          <p className="my-4">We may also collect information on how the Service is accessed and used (&ldquo;Usage Data&rdquo;). This Usage Data may include information such as your computer&rsquo;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
          <h3 className="font-bold text-2xl">Use of Data</h3>
          <p className="my-4">Statically uses the collected data for various purposes:</p>
          <ul className="my-4 ml-8 list-disc">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>
          <h3 className="font-bold text-2xl">Transfer of Data</h3>
          <p className="my-4">Your information, including Personal Data, may be transferred to &mdash;and maintained on&mdash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
          <p className="my-4">If you are located outside Indonesia and choose to provide information to us, please note that we transfer the data, including Personal Data, to Indonesia and process it there.</p>
          <p className="my-4">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
          <p className="my-4">Statically will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
          <h3 className="font-bold text-2xl">Disclosure of Data</h3>
          <h4 className="font-bold text-xl mt-4">Legal Requirements</h4>
          <p className="my-4">Statically may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul className="my-4 ml-8 list-disc">
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of Statically</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>
          <h4 className="font-bold text-xl">Security of Data</h4>
          <p className="my-4">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          <h3 className="font-bold text-2xl">Service Providers</h3>
          <p className="my-4">We may employ third party companies and individuals to facilitate our Service (&ldquo;Service Providers&rdquo;), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          <p className="my-4">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          <h4 className="font-bold text-xl">CDN (Content Delivery Network) for Main Site</h4>
          <p className="my-4">We use third-party Service Providers to serve all of our traffic under the domain <strong>statically.io</strong>. This means all of these providers have access to your IP address and other information sent by your web browser. This information is used for analytics and security purposes. Neither we nor our providers track any individual user.</p>
          <ul className="my-4 ml-8 list-disc">
            <li>
              <p className="my-4"><strong>Netlify</strong></p>
              <p className="my-4">For more information on the privacy practices of Netlify, please visit the following web page: <a className="text-red-500" href="https://www.netlify.com/privacy/">https://www.netlify.com/privacy/</a></p>
            </li>
          </ul>
          <h4 className="font-bold text-xl">CDN (Content Delivery Network)</h4>
          <p className="my-4">We use third-party Service Providers to serve all of our traffic under the domain <strong>cdn.statically.io</strong>. This means all of these providers have access to your IP address and other information sent by your web browser. This information is used for analytics and security purposes. Neither we nor our providers track any individual user.</p>
          <ul className="my-4 ml-8 list-disc">
            <li>
              <p className="my-4"><strong>Cloudflare</strong></p>
              <p className="my-4">For more information on the privacy practices of Cloudflare, please visit the following web page: <a className="text-red-500" href="https://www.cloudflare.com/security-policy/">https://www.cloudflare.com/security-policy/</a></p>
            </li>
            <li>
              <p className="my-4"><strong>Fastly</strong></p>
              <p className="my-4">For more information on the privacy practices of Fastly, please visit the following web page: <a className="text-red-500" href="https://www.fastly.com/privacy">https://www.fastly.com/privacy</a></p>
            </li>
            <li>
              <p className="my-4"><strong>CDN77</strong></p>
              <p className="my-4">For more information on the privacy practices of CDN77, please visit the following web page: <a className="text-red-500" href="https://www.cdn77.com/privacy">https://www.cdn77.com/privacy</a></p>
            </li>
            <li>
              <p className="my-4"><strong>BunnyCDN</strong></p>
              <p className="my-4">For more information on the privacy practices of BunnyCDN, please visit the following web page: <a className="text-red-500" href="https://www.bunnycdn.com/privacy">https://www.bunnycdn.com/privacy</a></p>
            </li>
          </ul>
          <h3 className="font-bold text-2xl">Links To Other Sites</h3>
          <p className="my-4">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
          <p className="my-4">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          <h3 className="font-bold text-2xl">Children&rsquo;s Privacy</h3>
          <p className="my-4">Our Service does not address anyone under the age of 13 (&ldquo;Children&rdquo;).</p>
          <p className="my-4">We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
          <h3 className="font-bold text-2xl">Changes To This Privacy Policy</h3>
          <p className="my-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p className="my-4">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p>
          <p className="my-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <p className="my-4">If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="my-4 ml-8 list-disc">
            <li>By visiting our <Link className="text-red-500" to="/contact">contact page</Link>.</li>
            <li>Tweet us on <a className="text-red-500" href="https://twitter.com/staticallyio">Twitter</a>.</li>
          </ul>

        </section>

      </div>
    </Layout>
  );
}

export default PrivacyPage;
