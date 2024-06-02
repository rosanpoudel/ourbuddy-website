import React from "react";

const Header = () => {
  const menu = [
    { name: "Benefits", href: "#benefits" },
    { name: "Features", href: "#features" },
    { name: "Advantages", href: "#advantages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];
  return (
    <header className=" w-full flex justify-between items-center px-8  py-4">
      <div className="text-2xl">
        <img src="/images/logo.svg" className="max-w-[190px] " />
      </div>
      <div className="flex items-center space-x-10">
        {menu?.map((m, i) => (
          <a
            key={i}
            href={m?.href}
            className="text-[#293c67] font-[500] hover:text-[#1276ff] "
          >
            {m?.name}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="flex items-center justify-center text-[#1276ff] px-8 py-3 rounded-lg  border border-[#1276ff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in duration-800 "
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
    </header>
  );
};

export default Header;
