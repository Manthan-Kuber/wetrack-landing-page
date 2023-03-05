import styles from "../styles/BrandLogo.module.css";

const BrandLogo = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.flex} >
        <span className={styles.line} />
        <span className={styles.right_arrow} />
      </div>
    </div>
  );
};
export default BrandLogo;
