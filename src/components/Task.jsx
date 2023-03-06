import styles from "../styles/Task.module.css";

const Task = ({ Icon, taskName, bgColor, txtColor, hasBorder }) => {
  return (
    <div
      className={styles.container}
      style={{
        border: hasBorder && "1px solid black",
        color: txtColor,
        backgroundColor: bgColor,
      }}
    >
      {Icon}
      <span>{taskName}</span>
    </div>
  );
};
export default Task;
