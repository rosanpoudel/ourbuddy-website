import HamburgerMenu from "@/components/hamburger-menu";
import MobileMenu from "../mobileMenu";

const Header = () => {
  const menu = [
    { name: "Benefits", href: "#benefits" },
    { name: "Features", href: "#features" },
    { name: "Advantages", href: "#advantages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="w-full flex justify-between items-center xl:px-8  py-6 xl:py-4">
      <div className="text-2xl">
        <img src="/images/logo.svg" className="max-w-[190px] " />
      </div>
      <div className="hidden xl:flex items-center space-x-10">
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
      <div className="hidden xl:flex items-center">
        <a
          href="#contact"
          className="flex items-center justify-center text-[#1276ff] font-[500] px-8 py-3 rounded-lg  border border-[#1276ff] hover:text-[#ffffff] hover:border-[#1276ff] hover:bg-[#1276ff] transition-all ease-in-out  duration-1000 "
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
          href="#"
          className="ml-5 flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
        >
          Login
        </a>
      </div>

      {/* hamburger menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
