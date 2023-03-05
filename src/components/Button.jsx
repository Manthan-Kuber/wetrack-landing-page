import styles from "../styles/Button.module.css";

const Button = ({ bgColor, txtColor, children, hasBorder = false,isLarge }) => {
  return (
    <button
      className={`${styles.button} ${hasBorder && styles.button_border} ${isLarge && styles.large}`}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {children}
    </button>
  );
};
export default Button;
