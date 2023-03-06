import styles from "../styles/MediaButtons.module.css";

const MediaButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pause}>
        <div className={styles.line_wrapper} >
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.stop}>
        <div />
      </div>
    </div>
  );
};
export default MediaButtons;
