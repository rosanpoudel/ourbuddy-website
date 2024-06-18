import { trackEvent } from "@/lib/segment";
import MobileMenu from "../mobileMenu";
import ContactSalesBtn from "./contactSalesBtn";
import HeaderLogo from "./headerLogo";
import LoginBtn from "./loginBtn";
import MenuItem from "./menuItem";

const Header = () => {
  const menu = [
    { name: "Benefits", href: "#why-our-buddy" },
    { name: "Features", href: "#features" },
    { name: "Advantages", href: "#unique-advantage" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Video benefits", href: "#videoBenefits" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="w-full flex justify-between items-center xl:px-8  py-6 xl:py-4">
      <h1>
        <HeaderLogo />
      </h1>
      <div className="hidden xl:flex items-center space-x-10">
        {menu?.map((m, i) => (
          <MenuItem data={m} />
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
