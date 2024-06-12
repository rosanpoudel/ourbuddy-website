import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="primary-gradient-bg">
      <div className="container py-10">
        <div className="flex justify-center text-center items-center">
          <div>
            <div className=" text-[14px] mb-10">
              <p className="mb-1 text-[18px] font-[500] text-[#a1a1a1]">
                OurBuddy.AI, All rights reserved.
              </p>
              <p className="text-[#d1d1d1]">
                All trademarks, trade names, or logos mentioned or used are the
                <br />
                property of their respective owners.
              </p>
            </div>

            <div className="flex justify-center text-[#a0aab7] text-[14px] mb-5">
              <a href="#" target="_blank">
                Terms of Service{" "}
              </a>
              <span className="mx-2">|</span>
              <a href="#" target="_blank">
                Privacy Policy{" "}
              </a>
            </div>

            <ul className="flex items-center justify-center gap-10">
              <li>
                <a href="#" target="_blank">
                  <img src="/social-icons/linkedin.svg" alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="/social-icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="/social-icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="/social-icons/youtube.svg" alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
