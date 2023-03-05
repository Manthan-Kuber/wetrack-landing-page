import styles from "../styles/ThreeDotMenu.module.css";

const ThreeDotMenu = () => {
  return (
    <div className={styles.container}>
      {[0, 0, 0].map((_) => (
        <div className={styles.outline_circle} />
      ))}
    </div>
  );
};
export default ThreeDotMenu;
