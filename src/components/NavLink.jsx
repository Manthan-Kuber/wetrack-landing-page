import styles from "@/styles/NavLink.module.css";

const NavLink = ({ label, hasDropdownIcon }) => {
  return (
    <li className={hasDropdownIcon ? styles.container : styles.default}>
      <a href="#">{label}</a>
      {hasDropdownIcon && <span>{"\u2BC6"}</span>}
    </li>
  );
};
export default NavLink;
