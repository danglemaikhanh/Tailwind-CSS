import { merchandise } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../contants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={merchandise} alt="logo" width={70} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hoverEffect font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} alt="humburger" width={30} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
