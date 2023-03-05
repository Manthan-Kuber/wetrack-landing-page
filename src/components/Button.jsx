import styles from "../styles/Button.module.css";
import { Gothic_A1 } from "next/font/google";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Button = ({ bgColor, txtColor, children, hasBorder = false }) => {
  return (
    <button
      className={`${styles.button} ${hasBorder && styles.button_border} ${
        gothic.className
      }`}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {children}
    </button>
  );
};
export default Button;
