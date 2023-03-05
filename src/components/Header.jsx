import NavLink from "./NavLink";
import { Gothic_A1 } from "next/font/google";

const gothic = Gothic_A1({subsets:["latin"],weight:["300","400","500","700"]});

const Header = () => {
  return (
    <header className={gothic.className}>
      <nav>
        <ul>
          <NavLink Label="Product" hasDropdownIcon />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
