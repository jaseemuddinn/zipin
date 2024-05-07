import React from "react";
import web from "../../assets/icon/web.png";
import android from "../../assets/icon/android.png";
import brand from "../../assets/icon/brand.png";

function Services() {
  return (
    <div id="services">
      <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Services
            </h2>
            <p className="mt-1 text-neutral-400">
              Unlocking innovation, accelerating growth, and shaping identities
              — we're your comprehensive solution for website development,
              Android development, and brand development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff5b00]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div className="mb-5">
                <img src={web} alt="Web Development" width={"50px"} />
                <div className="mt-5">
                  <p className="font-semibold text-4xl text-white">
                    Website Developement
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Crafting Digital Experiences
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Our Website Development service is all about crafting
                    digital experiences that captivate and engage your audience.
                    From intuitive user interfaces to seamless navigation, we
                    create websites that not only look great but also drive
                    results.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-skin-base pb-1 border-b-2 border-neutral-700 group-hover:border-skin-base transition focus:outline-none group-focus:border-skin-base">
                  Learn More
                </span>
              </p>
            </a>

            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff5b00]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div className="mb-5">
                <img src={android} alt="Android Developement" width={"50px"} />

                <div className="mt-5">
                  <p className="font-semibold text-4xl text-white">
                    Android Developement
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Mobile Innovation Solutions
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    Unlock the potential of the Android platform with our
                    Android Development service. We specialize in building
                    high-performance, feature-rich mobile applications that
                    offer a smooth and delightful user experience, helping you
                    reach and engage your customers on their favorite devices.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-skin-base pb-1 border-b-2 border-neutral-700 group-hover:border-skin-base transition focus:outline-none group-focus:border-skin-base">
                  Learn More
                </span>
              </p>
            </a>

            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff5b00]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div className="mb-5">
                <img src={brand} alt="Brand Building" width={"50px"} />

                <div className="mt-5">
                  <p className="font-semibold text-4xl text-white">
                    Brand Developement
                  </p>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    Shaping Brand Identity
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    {" "}
                    With our Brand Development service, we help businesses shape
                    and elevate their brand identity. From crafting compelling
                    brand stories to designing impactful visual assets, we work
                    closely with you to strengthen your brand presence and make
                    a lasting impression in the market.
                  </p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-skin-base pb-1 border-b-2 border-neutral-700 group-hover:border-skin-base transition focus:outline-none group-focus:border-skin-base">
                  Learn More
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
