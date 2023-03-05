import NavLink from "./NavLink";
import styles from "../styles/Header.module.css";
import BrandLogo from "./BrandLogo";
import ThreeDotMenu from "./ThreeDotMenu";
import Button from "./Button";

const navList = [
  { id: 1, label: "Product", hasDropdownIcon: true },
  { id: 2, label: "Key Features", hasDropdownIcon: false },
  { id: 3, label: "Why Wetrack", hasDropdownIcon: true },
  { id: 4, label: "Applications", hasDropdownIcon: true },
  { id: 5, label: "Careers", hasDropdownIcon: false },
  { id: 6, label: "Pricing", hasDropdownIcon: false },
].map((item) => (
  <NavLink
    key={item.id}
    label={item.label}
    hasDropdownIcon={item.hasDropdownIcon}
  />
));

const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <div className={styles.flex}>
        <BrandLogo />
        <nav>
          <ul className={styles.list}>{navList}</ul>
        </nav>
      </div>
      <div className={styles.flex}>
        <ThreeDotMenu />
        <Button hasBorder bgColor="white">
          Log In
        </Button>
        <Button hasBorder txtColor="white" bgColor="black">
          Try for free
        </Button>
      </div>
    </header>
  );
};
export default Header;
