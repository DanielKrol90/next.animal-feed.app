import React from "react";
import Link from "next/link";

const Navbar = () => {

    const navi = styled.ul`
        font-size: 1.5rem;
        text-align: center;
        list-style: none;
    `;


  return (
    <div>
      <div>
        <a>My Website</a>
      </div>
      <div>
        <ul className="navi">
          <li>
            <Link href="/">Strona Główna</Link>
          </li>
          <li>
            <Link href="/o_firmie">O Firmie</Link>
          </li>
          <li>
            <Link href="/aktualnosci">Aktualności</Link>
          </li>
          <li>
            <Link href="/oferta">Oferta</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;