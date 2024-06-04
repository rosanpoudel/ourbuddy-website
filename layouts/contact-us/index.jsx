import React from "react";
import SectionTitle from "../../components/sectionTitle";

const ContactUs = () => {
  return (
    <div className="content-section bg-[#f8f8fc]" id="contact">
      <div className="container ">
        <div className="grid xl:grid-cols-10 gap-10 xl:gap-16">
          <div className="xl:col-span-6">
            <SectionTitle
              heading="Contact us"
              description="Get in touch with us by submitting the form"
              subHeading="Get in touch"
            />

            <form>
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border border-gray-300 text-[#293C67] text-sm rounded-lg block w-full p-2.5 "
                  placeholder="email@ourbuddy"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-[#293C67] rounded-lg border border-gray-300 shadow-sm "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2 mb-3">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-[#293C67]  rounded-lg shadow-sm border border-gray-300"
                  placeholder="Leave a comment..."
                />
              </div>

              <div className="text-[#717885] text-sm mb-8">
                By submitting this form you agree to our{" "}
                <a href="#" className="text-[#326CEC]">
                  terms and conditions{" "}
                </a>
                and our{" "}
                <a href="#" className="text-[#326CEC]">
                  privacy policy{" "}
                </a>{" "}
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </div>
              <button
                type="button"
                className="w-full xl:w-auto flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
              >
                Send message
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* address */}
          <div className="xl:col-span-4 flex flex-col justify-center item-center">
            <>
              {/* company */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#EAECF2] p-3 rounded-lg inline-flex items-center justify-center">
                  <svg
                    className="w-8 h-8 xl:w-10 xl:h-10"
                    fill="#1e266d"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-[16px] xl:text-[18px] text-gray-600 text-center font-bold mt-3 mb-2">
                  Company Information
                </div>
                <div className="text-[14px] xl:text-[16px] text-center text-[#293c67]">
                  Softverse Technology Inc. & OurBuddy.AI
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center justify-center my-10">
                <div className="bg-[#EAECF2] p-3  rounded-lg inline-flex items-center justify-center">
                  <svg
                    className="w-8 h-8 xl:w-10 xl:h-10"
                    fill="#1e266d"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-[16px] xl:text-[18px] text-gray-600 text-center font-bold mt-3 mb-2">
                  Address
                </div>
                <div className="text-[14px] xl:text-[16px] text-center text-[#293c67]">
                  1234 Street Name, City, Nova Scotia, Canada
                </div>
              </div>

              {/* call */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#EAECF2] p-3  rounded-lg inline-flex items-center justify-center">
                  <svg
                    className="w-8 h-8 xl:w-10 xl:h-10"
                    fill="#1e266d"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div className="text-[16px] xl:text-[18px] text-gray-600 text-center font-bold mt-3 mb-2">
                  Contact sales
                </div>
                <div className="text-[14px] xl:text-[16px] text-center text-[#868C97]">
                  <div className="flex items-center justify-center mb-2">
                    <img src="/images/phone.svg" />
                    <a
                      href="tel:(123) 456-7890"
                      className="text-[#293c67] ml-2"
                    >
                      {"(123) 456-7890"}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/images/email.svg" />

                    <a
                      href="mailt0:contact@ourbuddy.ai"
                      className="text-[#293c67] ml-2"
                    >
                      contact@ourbuddy.ai
                    </a>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
