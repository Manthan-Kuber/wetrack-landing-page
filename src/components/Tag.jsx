import styles from "../styles/Tag.module.css";

const Tag = ({ children, bgColor, txtColor }) => {
  return (
    <span
      className={styles.tag}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {children}
    </span>
  );
};
export default Tag;
