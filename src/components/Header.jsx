import NavLink from "./NavLink";
import { Gothic_A1 } from "next/font/google";
import styles from "../styles/Header.module.css";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const navList = [
  { label: "Product", hasDropdownIcon: true },
  { label: "Key Features", hasDropdownIcon: false },
  { label: "Why Wetrack", hasDropdownIcon: true },
  { label: "Applications", hasDropdownIcon: true },
  { label: "Careers", hasDropdownIcon: false },
  { label: "Pricing", hasDropdownIcon: false },
].map((item) => (
  <NavLink label={item.label} hasDropdownIcon={item.hasDropdownIcon} />
));

const Header = () => {
  return (
    <header className={gothic.className}>
      <nav>
        <ul className={styles.list}>{navList}</ul>
      </nav>
    </header>
  );
};
export default Header;
