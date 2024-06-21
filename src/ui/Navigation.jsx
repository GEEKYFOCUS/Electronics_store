import { NavLink } from "react-router-dom";
import Header from "./NavBar";

const navLinks = [
  {
    name: "Home",
    href: "/homepage",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About ",
    href: "/about",
  },
  {
    name: "Sign Up",
    href: "/signup",
  },
];
function Navigation() {
  return (
    <nav className="">
      <ul className="list-none flex gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink href={link.href}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
