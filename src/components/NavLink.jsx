import styles from "@/styles/NavLink.module.css";

const NavLink = ({ Label, hasDropdownIcon }) => {
  return (
    <li className={hasDropdownIcon && styles.container}>
      <a href="#">{Label}</a>
      {hasDropdownIcon && <span>{"\u2BC6"}</span>}
    </li>
  );
};
export default NavLink;
