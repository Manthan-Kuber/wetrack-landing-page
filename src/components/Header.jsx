import NavLink from "./NavLink";
import { Gothic_A1 } from "next/font/google";
import styles from "../styles/Header.module.css";
import BrandLogo from "./BrandLogo";
import ThreeDotMenu from "./ThreeDotMenu";
import Button from "./Button";

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
    <header className={`${gothic.className} ${styles.container}`}>
      <div className={styles.flex} >
        <BrandLogo />
        <nav>
          <ul className={styles.list}>{navList}</ul>
        </nav>
      </div>
      <div className={styles.flex} >
        <ThreeDotMenu />
        <Button hasBorder bgColor="white" >Log In</Button>
        <Button hasBorder txtColor="white" bgColor="black" >Try for free</Button>
      </div>
    </header>
  );
};
export default Header;
