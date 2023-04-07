
import Link from "next/link";
import Image from "next/image";
import { Images } from "../constants";

const Navbar = () => {
    
  return (
    <div>
      <div>
        <Image src
      </div>
      <div>
        <ul>
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