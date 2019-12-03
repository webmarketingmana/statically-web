import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import networkMap from "../images/network-map.svg";

function NetworkPage() {
  return (
    <Layout>
      <SEO
        title="Network"
        keywords={[`statically`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-2xl mx-auto mt-5 mb-5">
              More Than 300+ Point of Presence
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>

        <section id="network-map" className="mt-20 max-w-6xl mx-auto">
          <div className="net">
              
              <img src={networkMap} alt="network map" />

              <ul className="bunnycdn">
                {/** BunnyCDN North America */}
                <li className="na-pop pop-na-ASH"></li>
                <li className="na-pop pop-na-ATL"></li>
                <li className="na-pop pop-na-CHI"></li>
                <li className="na-pop pop-na-DAL"></li>
                <li className="na-pop pop-na-LAX"></li>
                <li className="na-pop pop-na-MIA"></li>
                <li className="na-pop pop-na-NYC"></li>
                <li className="na-pop pop-na-SJC"></li>
                <li className="na-pop pop-na-SEA"></li>
                <li className="na-pop pop-na-YTO"></li>

                {/** BunnyCDN South America */}
                <li className="la-pop pop-la-SAO"></li>

                {/** BunnyCDN Europe */}
                <li className="eu-pop pop-eu-AMS"></li>
                <li className="eu-pop pop-eu-BBU"></li>
                <li className="eu-pop pop-eu-FRA"></li>
                <li className="as-pop pop-as-IST"></li>
                <li className="eu-pop pop-eu-LON"></li>
                <li className="eu-pop pop-eu-MAD"></li>
                <li className="eu-pop pop-eu-MIL"></li>
                <li className="eu-pop pop-eu-MOW"></li>
                <li className="eu-pop pop-eu-OSL"></li>
                <li className="eu-pop pop-eu-PAR"></li>
                <li className="eu-pop pop-eu-PRG"></li>
                <li className="eu-pop pop-eu-VNO"></li>
                <li className="eu-pop pop-eu-WAW"></li>

                {/** BunnyCDN Asia */}
                <li className="as-pop pop-as-BLR"></li>
                <li className="as-pop pop-as-HKG"></li>
                <li className="as-pop pop-as-SEL"></li>
                <li className="as-pop pop-as-SIN"></li>
                <li className="as-pop pop-as-TYO"></li>

                {/** BunnyCDN Oceania */}
                <li className="oc-pop pop-oc-ADL"></li>
                <li className="oc-pop pop-oc-AKL"></li>
                <li className="oc-pop pop-oc-BNE"></li>
                <li className="oc-pop pop-oc-MEL"></li>
                <li className="oc-pop pop-oc-PER"></li>
                <li className="oc-pop pop-oc-SYD"></li>
              </ul>

              <ul className="cdn77">
                {/** CDN77 North America */}
                <li className="na-pop pop-na-ATL"></li>
                <li className="na-pop pop-na-CHI"></li>
                <li className="na-pop pop-na-DAL"></li>
                <li className="na-pop pop-na-LAX"></li>
                <li className="na-pop pop-na-MIA"></li>
                <li className="na-pop pop-na-NYC"></li>
                <li className="na-pop pop-na-YTO"></li>

                {/** CDN77 South America */}
                <li className="la-pop pop-la-BUE"></li>
                <li className="la-pop pop-la-SCQ"></li>
                <li className="la-pop pop-la-SAO"></li>

                {/** CDN77 Europe */}
                <li className="eu-pop pop-eu-AMS"></li>
                <li className="eu-pop pop-eu-BTS"></li>
                <li className="eu-pop pop-eu-FRA"></li>
                <li className="as-pop pop-as-IEV"></li>
                <li className="eu-pop pop-eu-LON"></li>
                <li className="eu-pop pop-eu-MAD"></li>
                <li className="eu-pop pop-eu-MIL"></li>
                <li className="eu-pop pop-eu-MOW"></li>
                <li className="eu-pop pop-eu-OSL"></li>
                <li className="eu-pop pop-eu-PAR"></li>
                <li className="eu-pop pop-eu-PRG"></li>
                <li className="eu-pop pop-eu-STO"></li>
                <li className="eu-pop pop-eu-VNO"></li>
                <li className="eu-pop pop-eu-WAW"></li>
                <li className="eu-pop pop-eu-ZRH"></li>

                {/** CDN77 Asia */}
                <li className="as-pop pop-as-DEL"></li>
                <li className="as-pop pop-as-HKG"></li>
                <li className="as-pop pop-as-ISL"></li>
                <li className="as-pop pop-as-JKT"></li>
                <li className="as-pop pop-as-SEL"></li>
                <li className="as-pop pop-as-SIN"></li>
                <li className="as-pop pop-as-TSA"></li>
                <li className="as-pop pop-as-TYO"></li>

                {/** CDN77 Oceania */}
                <li className="oc-pop pop-oc-ADL"></li>
                <li className="oc-pop pop-oc-AKL"></li>
                <li className="oc-pop pop-oc-BNE"></li>
                <li className="oc-pop pop-oc-MEL"></li>
                <li className="oc-pop pop-oc-PER"></li>
                <li className="oc-pop pop-oc-SYD"></li>
              </ul>

              <ul className="cloudflare">
                {/** Cloudflare North America */}
                <li className="na-pop pop-na-ASH"></li>
                <li className="na-pop pop-na-ATL"></li>
                <li className="na-pop pop-na-BOS"></li>
                <li className="na-pop pop-na-BUF"></li>
                <li className="na-pop pop-na-YYC"></li>
                <li className="na-pop pop-na-CLT"></li>
                <li className="na-pop pop-na-CHI"></li>
                <li className="na-pop pop-na-CMH"></li>
                <li className="na-pop pop-na-DAL"></li>
                <li className="na-pop pop-na-DEN"></li>
                <li className="na-pop pop-na-DTW"></li>
                <li className="na-pop pop-na-HOU"></li>
                <li className="na-pop pop-na-IND"></li>
                <li className="na-pop pop-na-JAX"></li>
                <li className="na-pop pop-na-MCI"></li>
                <li className="na-pop pop-na-LVS"></li>
                <li className="na-pop pop-na-LAX"></li>
                <li className="na-pop pop-na-MFE"></li>
                <li className="na-pop pop-na-MEM"></li>
                <li className="na-pop pop-na-MIA"></li>
                <li className="na-pop pop-na-MIC"></li>
                <li className="na-pop pop-na-MGM"></li>
                <li className="na-pop pop-na-YMQ"></li>
                <li className="na-pop pop-na-BNA"></li>
                <li className="na-pop pop-na-EWR"></li>
                <li className="na-pop pop-na-ORF"></li>
                <li className="na-pop pop-na-OMA"></li>
                <li className="na-pop pop-na-YOW"></li>
                <li className="na-pop pop-na-PHL"></li>
                <li className="na-pop pop-na-PHX"></li>
                <li className="na-pop pop-na-PIT"></li>
                <li className="na-pop pop-na-PDX"></li>
                <li className="na-pop pop-na-RIC"></li>
                <li className="na-pop pop-na-SAC"></li>
                <li className="na-pop pop-na-SLC"></li>
                <li className="na-pop pop-na-SAN"></li>
                <li className="na-pop pop-na-SJC"></li>
                <li className="na-pop pop-na-YXE"></li>
                <li className="na-pop pop-na-SEA"></li>
                <li className="na-pop pop-na-STL"></li>
                <li className="na-pop pop-na-TLH"></li>
                <li className="na-pop pop-na-TPA"></li>
                <li className="na-pop pop-na-YTO"></li>
                <li className="na-pop pop-na-YVR"></li>
                <li className="na-pop pop-na-YWG"></li>

                {/** Cloudflare Latin America & the Caribbean */}
                <li className="la-pop pop-la-ARI"></li>
                <li className="la-pop pop-la-ASU"></li>
                <li className="la-pop pop-la-BOG"></li>
                <li className="la-pop pop-la-BUE"></li>
                <li className="la-pop pop-la-COR"></li>
                <li className="la-pop pop-la-CWB"></li>
                <li className="la-pop pop-la-FOR"></li>
                <li className="la-pop pop-la-GUA"></li>
                <li className="la-pop pop-la-ZLO"></li>
                <li className="la-pop pop-la-EOH"></li>
                <li className="la-pop pop-la-MEX"></li>
                <li className="la-pop pop-la-NQN"></li>
                <li className="la-pop pop-la-PFN"></li>
                <li className="la-pop pop-la-PAP"></li>
                <li className="la-pop pop-la-POA"></li>
                <li className="la-pop pop-la-QRO"></li>
                <li className="la-pop pop-la-RIO"></li>
                <li className="la-pop pop-la-SAO"></li>
                <li className="la-pop pop-la-IPC"></li>
                <li className="la-pop pop-la-CUR"></li>

                {/** Cloudflare Europe */}
                <li className="eu-pop pop-eu-AMS"></li>
                <li className="eu-pop pop-eu-ATH"></li>
                <li className="eu-pop pop-eu-BCN"></li>
                <li className="eu-pop pop-eu-BEG"></li>
                <li className="eu-pop pop-eu-BER"></li>
                <li className="eu-pop pop-eu-BRU"></li>
                <li className="eu-pop pop-eu-BBU"></li>
                <li className="eu-pop pop-eu-BUD"></li>
                <li className="eu-pop pop-eu-KIV"></li>
                <li className="eu-pop pop-eu-CPH"></li>
                <li className="eu-pop pop-eu-ORK"></li>
                <li className="eu-pop pop-eu-DUB"></li>
                <li className="eu-pop pop-eu-DUS"></li>
                <li className="eu-pop pop-eu-EDI"></li>
                <li className="eu-pop pop-eu-FRA"></li>
                <li className="eu-pop pop-eu-GVA"></li>
                <li className="eu-pop pop-eu-GOT"></li>
                <li className="eu-pop pop-eu-HAM"></li>
                <li className="eu-pop pop-eu-HEL"></li>
                <li className="eu-pop pop-eu-ISL"></li>
                <li className="eu-pop pop-eu-IEV"></li>
                <li className="eu-pop pop-eu-LIS"></li>
                <li className="eu-pop pop-eu-LON"></li>
                <li className="eu-pop pop-eu-LUX"></li>
                <li className="eu-pop pop-eu-MAD"></li>
                <li className="eu-pop pop-eu-MAN"></li>
                <li className="eu-pop pop-eu-MRS"></li>
                <li className="eu-pop pop-eu-MIL"></li>
                <li className="eu-pop pop-eu-MOW"></li>
                <li className="eu-pop pop-eu-MUC"></li>
                <li className="eu-pop pop-eu-ECN"></li>
                <li className="eu-pop pop-eu-OSL"></li>
                <li className="eu-pop pop-eu-PAR"></li>
                <li className="eu-pop pop-eu-PRG"></li>
                <li className="eu-pop pop-eu-REK"></li>
                <li className="eu-pop pop-eu-RIX"></li>
                <li className="eu-pop pop-eu-ROM"></li>
                <li className="eu-pop pop-eu-SOF"></li>
                <li className="eu-pop pop-eu-LED"></li>
                <li className="eu-pop pop-eu-STO"></li>
                <li className="eu-pop pop-eu-TLL"></li>
                <li className="eu-pop pop-eu-SKG"></li>
                <li className="eu-pop pop-eu-VIE"></li>
                <li className="eu-pop pop-eu-VNO"></li>
                <li className="eu-pop pop-eu-WAW"></li>
                <li className="eu-pop pop-eu-ZAG"></li>
                <li className="eu-pop pop-eu-ZRH"></li>

                {/** Cloudflare Asia */}
                <li className="as-pop pop-as-BKK"></li>
                <li className="as-pop pop-as-BLR"></li>
                <li className="as-pop pop-as-CEB"></li>
                <li className="as-pop pop-as-MAA"></li>
                <li className="as-pop pop-as-CMB"></li>
                <li className="as-pop pop-as-HAN"></li>
                <li className="as-pop pop-as-SGN"></li>
                <li className="as-pop pop-as-HKG"></li>
                <li className="as-pop pop-as-HYD"></li>
                <li className="as-pop pop-as-ISB"></li>
                <li className="as-pop pop-as-JKT"></li>
                <li className="as-pop pop-as-KHI"></li>
                <li className="as-pop pop-as-KTM"></li>
                <li className="as-pop pop-as-CCU"></li>
                <li className="as-pop pop-as-KUL"></li>
                <li className="as-pop pop-as-LHE"></li>
                <li className="as-pop pop-as-MFM"></li>
                <li className="as-pop pop-as-MLE"></li>
                <li className="as-pop pop-as-MNL"></li>
                <li className="as-pop pop-as-BOM"></li>
                <li className="as-pop pop-as-NAG"></li>
                <li className="as-pop pop-as-DEL"></li>
                <li className="as-pop pop-as-NOU"></li>
                <li className="as-pop pop-as-OSA"></li>
                <li className="as-pop pop-as-PNH"></li>
                <li className="as-pop pop-as-SEL"></li>
                <li className="as-pop pop-as-SIN"></li>
                <li className="as-pop pop-as-TSA"></li>
                <li className="as-pop pop-as-TYO"></li>
                <li className="as-pop pop-as-ULN"></li>
                <li className="as-pop pop-as-EVN"></li>

                {/** Cloudflare Oceania */}
                <li className="oc-pop pop-oc-AKL"></li>
                <li className="oc-pop pop-oc-BNE"></li>
                <li className="oc-pop pop-oc-MEL"></li>
                <li className="oc-pop pop-oc-PER"></li>
                <li className="oc-pop pop-oc-SYD"></li>

                {/** Cloudflare Middle East */}
                <li className="me-pop pop-me-AMM"></li>
                <li className="me-pop pop-me-BGW"></li>
                <li className="me-pop pop-me-BAK"></li>
                <li className="me-pop pop-me-BEY"></li>
                <li className="me-pop pop-me-DOH"></li>
                <li className="me-pop pop-me-DXB"></li>
                <li className="me-pop pop-me-KWI"></li>
                <li className="me-pop pop-me-BAH"></li>
                <li className="me-pop pop-me-MCT"></li>
                <li className="me-pop pop-me-RUH"></li>
                <li className="me-pop pop-me-TLV"></li>

                {/** Cloudflare Africa */}
                <li className="af-pop pop-af-TNR"></li>
                <li className="af-pop pop-af-CAI"></li>
                <li className="af-pop pop-af-CPT"></li>
                <li className="af-pop pop-af-CAS"></li>
                <li className="af-pop pop-af-DKR"></li>
                <li className="af-pop pop-af-DAR"></li>
                <li className="af-pop pop-af-JIB"></li>
                <li className="af-pop pop-af-DUR"></li>
                <li className="af-pop pop-af-JNB"></li>
                <li className="af-pop pop-af-KGL"></li>
                <li className="af-pop pop-af-LOS"></li>
                <li className="af-pop pop-af-LAD"></li>
                <li className="af-pop pop-af-MPM"></li>
                <li className="af-pop pop-af-MBA"></li>
                <li className="af-pop pop-af-MRU"></li>
                <li className="af-pop pop-af-RUN"></li>

                {/** Cloudflare Mainland China */}
                <li className="cn-pop pop-cn-CKG"></li>
                <li className="cn-pop pop-cn-DGM"></li>
                <li className="cn-pop pop-cn-CAN"></li>
                <li className="cn-pop pop-cn-TNA"></li>
                <li className="cn-pop pop-cn-NNG"></li>
                <li className="cn-pop pop-cn-NGB"></li>
                <li className="cn-pop pop-cn-SHA"></li>
                <li className="cn-pop pop-cn-SHE"></li>
                <li className="cn-pop pop-cn-SJW"></li>
                <li className="cn-pop pop-cn-SZV"></li>
                <li className="cn-pop pop-cn-TSN"></li>
                <li className="cn-pop pop-cn-TAO"></li>
                <li className="cn-pop pop-cn-WUH"></li>
                <li className="cn-pop pop-cn-WUX"></li>
                <li className="cn-pop pop-cn-XIY"></li>
                <li className="cn-pop pop-cn-CGO"></li>
                <li className="cn-pop pop-cn-CSX"></li>
              </ul>

              <ul className="fastly">
                {/** Fastly North America */}
                <li className="na-pop pop-na-ASH"></li>
                <li className="na-pop pop-na-ATL"></li>
                <li className="na-pop pop-na-BOS"></li>
                <li className="na-pop pop-na-CHI"></li>
                <li className="na-pop pop-na-CMH"></li>
                <li className="na-pop pop-na-DAL"></li>
                <li className="na-pop pop-na-DEN"></li>
                <li className="na-pop pop-na-HOU"></li>
                <li className="na-pop pop-na-LAX"></li>
                <li className="na-pop pop-na-MIA"></li>
                <li className="na-pop pop-na-MIC"></li>
                <li className="na-pop pop-na-YMQ"></li>
                <li className="na-pop pop-na-NYC"></li>
                <li className="na-pop pop-na-SJC"></li>
                <li className="na-pop pop-na-SEA"></li>
                <li className="na-pop pop-na-YTO"></li>
                <li className="na-pop pop-na-YVR"></li>

                {/** Fastly South America */}
                <li className="la-pop pop-la-BOG"></li>
                <li className="la-pop pop-la-BUE"></li>
                <li className="la-pop pop-la-CWB"></li>
                <li className="la-pop pop-la-SAO"></li>
                <li className="la-pop pop-la-SCQ"></li>
                <li className="la-pop pop-la-RIO"></li>

                {/** Fastly Europe */}
                <li className="eu-pop pop-eu-AMS"></li>
                <li className="eu-pop pop-eu-CPH"></li>
                <li className="eu-pop pop-eu-FRA"></li>
                <li className="eu-pop pop-eu-HEM"></li>
                <li className="eu-pop pop-eu-LON"></li>
                <li className="eu-pop pop-eu-MAD"></li>
                <li className="eu-pop pop-eu-MIL"></li>
                <li className="eu-pop pop-eu-OSL"></li>
                <li className="eu-pop pop-eu-PAR"></li>
                <li className="eu-pop pop-eu-STO"></li>

                {/** Fastly Africa */}
                <li className="af-pop pop-af-CPT"></li>
                <li className="af-pop pop-af-JNB"></li>

                {/** Fastly Asia */}
                <li className="as-pop pop-as-MAA"></li>
                <li className="as-pop pop-as-DXB"></li>
                <li className="as-pop pop-as-HKG"></li>
                <li className="as-pop pop-as-BOM"></li>
                <li className="as-pop pop-as-DEL"></li>
                <li className="as-pop pop-as-OSA"></li>
                <li className="as-pop pop-as-SIN"></li>
                <li className="as-pop pop-as-TYO"></li>

                {/** Fastly Oceania */}
                <li className="oc-pop pop-oc-AKL"></li>
                <li className="oc-pop pop-oc-BNE"></li>
                <li className="oc-pop pop-oc-MEL"></li>
                <li className="oc-pop pop-oc-PER"></li>
                <li className="oc-pop pop-oc-SYD"></li>
                <li className="oc-pop pop-oc-WLG"></li>

                {/** Fastly coming soon */}
                <li className="cs-pop pop-cs-DUB"></li>
                <li className="cs-pop pop-cs-JAC"></li>
                <li className="cs-pop pop-cs-LON"></li>
                <li className="cs-pop pop-cs-MAN"></li>
                <li className="cs-pop pop-cs-TLV"></li>
                <li className="cs-pop pop-cs-VIE"></li>
              </ul>

              <ul className="statically">
                {/** Statically North America */}

                {/** Statically South America */}

                {/** Statically Europe */}

                {/** Statically Africa */}

                {/** Statically Asia */}
                <li className="as-pop pop-as-JKT"></li>
                <li className="as-pop pop-as-YIA"></li>

                {/** Statically Oceania */}

                {/** Statically coming soon */}
                <li className="cs-pop pop-cs-MES"></li>
                <li className="cs-pop pop-cs-BDO"></li>
                <li className="cs-pop pop-cs-SUB"></li>
                <li className="cs-pop pop-cs-BPN"></li>
                <li className="cs-pop pop-cs-UPG"></li>
              </ul>
            </div>
        </section>

        <section className="mb-24 max-w-4xl mx-auto">
        <div className="flex content-center flex-wrap bg-white shadow px-8 py-6 rounded border">
          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm overflow-hidden mx-auto">
            <div className="font-bold text-3xl mb-2">Title</div>
            <p className="text-gray-700 text-xl">
              Lorem ipsum
            </p>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm overflow-hidden mx-auto">
            <div className="font-bold text-3xl mb-2">Title</div>
            <p className="text-gray-700 text-xl">
              Lorem ipsum
            </p>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm overflow-hidden mx-auto">
            <div className="font-bold text-3xl mb-2">Title</div>
            <p className="text-gray-700 text-xl">
              Lorem ipsum
            </p>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm overflow-hidden mx-auto">
            <div className="font-bold text-3xl mb-2">Title</div>
            <p className="text-gray-700 text-xl">
              Lorem ipsum
            </p>
          </div>
        </div>
        </section>

      </div>
    </Layout>
  );
}

export default NetworkPage;