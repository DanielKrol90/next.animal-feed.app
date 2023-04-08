import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { images } from "../constants";
import NavItem from "./NavItem";

const MenuList = [
  { text: "Strona Główna", href: "/" },
  { text: "O Firmie", href: "/o_firmie" },
  { text: "Aktualności", href: "/aktualnosci" },
  { text: "Oferta", href: "/oferta" },
  { text: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="nav__container">
      <div className="nav__brand">
        <Link href="/">
          <Image
            className="nav__img-desktop"
            src={images.Logo2}
            alt="logo"
          />
          <Image
            className="nav__img-mobile"
            src={images.Logo2_v}
            alt="logo"
          />
        </Link>
      </div>
      <nav className={`nav__navbar`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
        </div>
        <nav className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MenuList.map((menu, idx) => (
            <li
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </li>
          ))}
        </nav>
      </nav>
    </header>
  );
}
export default Navbar;
