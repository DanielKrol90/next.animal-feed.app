
import Link from "next/link";
import Image from "next/image";

import { images } from "../constants";

const Navbar = () => {
    
  return (
    <div>
      <div>
      <Image src={images.Logo2} alt="logo" width={600} height={60} />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Strona Główna</Link>
          </li>
          <li>
            <Link href="/O_firmie">O Firmie</Link>
          </li>
          <li>
            <Link href="/Aktualnosci">Aktualności</Link>
          </li>
          <li>
            <Link href="/Oferta">Oferta</Link>
          </li>
          <li>
            <Link href="/Kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;