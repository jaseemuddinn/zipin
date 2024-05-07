import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //logic to send data to email
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div id="contact">
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Contact us
            </h2>
            <p className="mt-1 text-neutral-400">
              Whatever your goal - we will get you there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form
                onSubmit={handleSubmit}
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <div className="space-y-4">
                  <input
                    type="hidden"
                    name="access_key"
                    value="df61fbe2-5132-4a56-b996-0b45e79b3365"
                  ></input>
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Name"
                      required
                    />
                    <label
                      htmlFor="hs-tac-input-name"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="hs-tac-input-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="hs-tac-input-email"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-company"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="hs-tac-input-company"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Company
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-phone"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="hs-tac-input-phone"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      id="hs-tac-message"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="This is a textarea placeholder"
                    ></textarea>
                    <label
                      htmlFor="hs-tac-message"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      required
                    >
                      Tell us about your project
                    </label>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-xs text-neutral-500">
                    All fields are required
                  </p>

                  <p className="mt-5">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-skin-fill font-medium text-sm text-white rounded-full focus:outline-none"
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Sent" : "Submit"}

                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-14">
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Email us:</h4>

                  <a
                    className="mt-1 text-neutral-400 text-sm"
                    href="#mailto:example@site.co"
                    target="_blank"
                  >
                    hello@zipintech.com
                  </a>
                </div>
              </div>
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">
                    We are on the Internet.{" "}
                  </h4>
                </div>
              </div>
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">We're hiring</h4>
                  <p className="mt-1 text-neutral-400">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                  </p>
                  <p className="mt-2">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-skin-base decoration-2 hover:underline focus:outline-none focus:underline"
                      href="https://www.linkedin.com/company/zipintech/jobs/"
                      target="_blank"
                    >
                      Job openings
                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5 "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
