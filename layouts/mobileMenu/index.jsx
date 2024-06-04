"use client";
import HamburgerMenu from "@/components/hamburger-menu";
import { useState } from "react";

const MobileMenu = () => {
  const menu = [
    { name: "Benefits", href: "#benefits" },
    { name: "Features", href: "#features" },
    { name: "Advantages", href: "#advantages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <HamburgerMenu onClick={handleHamburgerClick} isOpen={isOpen} />
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleHamburgerClick}
          />

          <div
            className={`${
              isOpen ? "left-0" : "left-[-100vw]"
            } fixed px-10  top-0 h-[100vh] w-[82vw] bg-[#ffffff] z-50`}
          >
            <div className="mt-10">
              {menu?.map((m, i) => (
                <a
                  key={i}
                  href={m?.href}
                  className="block text-[#293c67] text-[20px] mb-4 font-[500] hover:text-[#1276ff] py-3"
                  onClick={handleHamburgerClick}
                >
                  {m?.name}
                </a>
              ))}
            </div>
            <div className="mt-10">
              <a
                onClick={handleHamburgerClick}
                href="#contact"
                className="w-full flex items-center justify-center text-[#1276ff] font-[500] px-8 py-3 mb-5 rounded-lg  border border-[#1276ff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in-out  duration-1000 "
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
                onClick={handleHamburgerClick}
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
