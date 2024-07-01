import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    href: "/home",
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
            <NavLink to={link.href} onClick={() => console.log(link.name)}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
