"use client";
import HamburgerMenu from "@/components/hamburger-menu";
import { trackEvent } from "@/lib/segment";
import { formatDate } from "@/utils/date";
import { useState, useEffect } from "react";

const MobileMenu = () => {
  const menu = [
    { name: "Benefits", href: "#benefits" },
    { name: "Features", href: "#features" },
    { name: "Advantages", href: "#advantages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = (label) => {
    trackEvent("Button Clicked", { buttonName: label });

    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    trackEvent("Page visit", { type: "Mobile" });
  }, []);

  return (
    <div className="xl:hidden">
      <div
        className={
          isOpen
            ? "hamburger-active-color absolute top-[20px] right-[22vw] z-[999999]"
            : ""
        }
      >
        <HamburgerMenu onClick={handleHamburgerClick} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 "
            onClick={() => handleHamburgerClick("Hamburger menu")}
          />

          <div
            className={`${
              isOpen ? "left-0" : "left-[-100vw]"
            } mobile-menu-bg fixed px-10  top-0 h-[100vh] w-[82vw] bg-[#ffffff] z-50`}
          >
            <div className="mt-20">
              {menu?.map((m, i) => (
                <a
                  key={i}
                  href={m?.href}
                  className="block text-[#d7d7d7] text-[20px] mb-4 font-[500] hover:text-[#1276ff] py-3"
                  onClick={() => handleHamburgerClick(m?.name)}
                >
                  {m?.name}
                </a>
              ))}
            </div>
            <div className="mt-10">
              <a
                onClick={() => handleHamburgerClick("Contact sales")}
                href="#contact-us"
                className="w-full flex items-center justify-center text-[#ffffff] font-[500] px-8 py-3 mb-5 rounded-lg  border border-[#ffffff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in-out  duration-1000 "
              >
                Contact sales
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
              </a>

              <a
                onClick={() => handleHamburgerClick("Login")}
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
              >
                Login
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
