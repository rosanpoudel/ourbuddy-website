import MobileMenu from "../mobileMenu";
import ContactSalesBtn from "./contactSalesBtn";
import LoginBtn from "./loginBtn";

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
      <h1>
        <img src="/images/logo.svg" className="max-w-[190px] " />
      </h1>
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
        <ContactSalesBtn />

        <LoginBtn />
      </div>

      {/* hamburger menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
