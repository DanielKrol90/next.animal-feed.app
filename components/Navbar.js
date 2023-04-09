import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      <nav
        className={isNavExpanded ? "nav__container hidden" : "nav__container"}
      >
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className={`${
            isNavExpanded ? "nav__menu-bar-toggle active" : ""
          } nav__menu-bar-toggle`}
        >
          <RxHamburgerMenu size={20} />
        </button>
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
        <div className="nav__navbar">
          <ul className={`${isNavExpanded ? "active" : ""} nav__menu-list`}>
            {MenuList.map((menu, idx) => (
              <li
                onClick={() => {
                  setActiveIdx(idx);
                }}
                key={menu.text}
              >
                <NavItem
                  active={activeIdx === idx}
                  {...menu}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};
export default Navbar;
