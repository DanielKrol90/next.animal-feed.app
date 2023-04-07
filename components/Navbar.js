import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { images } from "../constants";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="nav__container">
      <div className="nav__brand">
        <Link href="/">
          <Image
            src={images.Logo2}
            alt="logo"
          />
        </Link>
      </div>
      <nav className="nav__navbar">
        <ul>
          <li>
            <Link
              href="/"
              className={currentRoute === "/" ? "active" : ""}
            >
              Strona Główna
            </Link>
          </li>
          <li>
            <Link
              href="/o_firmie"
              className={currentRoute === "/o_firmie" ? "active" : ""}
            >
              O Firmie
            </Link>
          </li>
          <li>
            <Link
              href="/aktualnosci"
              className={currentRoute === "/aktualnosci" ? "active" : ""}
            >
              Aktualności
            </Link>
          </li>
          <li>
            <Link
              href="/oferta"
              className={currentRoute === "/oferta" ? "active" : ""}
            >
              Oferta
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={currentRoute === "/kontakt" ? "active" : ""}
            >
            <div/>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
