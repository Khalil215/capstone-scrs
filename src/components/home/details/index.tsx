import React from "react";
import styles from "./Details.module.css";
import url from "../../../assets/icons/url.png";
import qrCode from "../../../assets/icons/qrcode.png";
import analytics from "../../../assets/icons/analytics.png";
import customUrl from "../../../assets/icons/customurl.png";

const Details: React.FC = () => {
  return (
    <>
      <section className="content flex flex-col gap-5 items-start justify-between py-24 md:flex-row md:gap-0">
        <div className={`${styles.statsLeft} mx-auto lg:mx-0`}>
          <h1 className="text font-bold text-center text-3xl flex flex-col gap-2 lg:flex-col lg:gap-1 lg:text-left">
            <span>One Stop.</span>
            <span>
              Four <span className="text-blue-700">Possibilities</span>.
            </span>
          </h1>
        </div>

        <div className={`${styles.statsRight} flex justify-between`}>
          <div className={`flex flex-col ${styles.statsItem}`}>
            <h4 className="font-bold text-3xl mb-2">3M</h4>
            <p>Active users</p>
          </div>

          <div className={`flex flex-col ${styles.statsItem}`}>
            <h4 className="font-bold text-3xl mb-2">60M</h4>
            <p className="lg:w-2/3">Links & QR codes created</p>
          </div>

          <div className={`flex flex-col ${styles.statsItem}`}>
            <h4 className="font-bold text-3xl mb-2">1B</h4>
            <p className="lg:w-5/6">Clicked & Scanned connections</p>
          </div>

          <div className={`flex flex-col ${styles.statsItem}`}>
            <h4 className="font-bold text-3xl mb-2">300k</h4>
            <p>App Integrations</p>
          </div>
        </div>
      </section>

      <div
        className="content mx-auto flex flex-col items-start justify-between py-5 lg:flex-row lg:w-11/12`"
        id="features"
      >
        <div
          className={`${styles.flex1} flex flex-col gap-2 items-start text-center lg:text-left`}
        >
          <h1 className={`${styles.whyTitle} text-3xl font-bold`}>
            Why choose <span className="text-blue-700">Scissors</span>
          </h1>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className={`${styles.flex2} flex flex-wrap justify-between mt-18`}>
          <div className={`${styles.card} flex flex-col gap-7 mb-14`}>
            <div>
              <img src={url} height="45px" width="45px" alt="url shortening" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">URL Shortening</h2>
              <p className="mt-2 text-justify text-base">
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
          </div>
          <div className={`${styles.card} flex flex-col gap-7 mb-14`}>
            <div>
              <img
                src={customUrl}
                height="45px"
                width="45px"
                alt="custom url"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Custom URLs</h2>
              <p className="mt-2 text-justify text-base">
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </div>
          <div className={`${styles.card} flex flex-col gap-7 mb-14`}>
            <div>
              <img src={qrCode} height="45px" width="45px" alt="QR codes" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">QR Codes</h2>
              <p className="mt-2 text-justify text-base">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
          </div>
          <div className={`${styles.card} flex flex-col gap-7 mb-14`}>
            <div>
              <img
                src={analytics}
                height="45px"
                width="45px"
                alt="analystics"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Data Analytics</h2>
              <p className="mt-2 text-justify text-base">
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
