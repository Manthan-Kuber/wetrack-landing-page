import styles from "../styles/CardRow.module.css";
import Avatar from "./Avatar";

const CardRow = ({
  title,
  time,
  avatar1,
  avatar2,
  hasSeparator,
  checkBoxColor,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div
            className={styles.outline_circle}
            style={{ borderColor: checkBoxColor }}
          />
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.flex}>
          <span className={styles.time}>{time}</span>
          <div className={styles.avatar_container}>
            <div className={styles.avatar_wrapper}>
              <Avatar img={avatar1} size={35} />
            </div>
            <Avatar img={avatar2} size={35} />
          </div>
        </div>
      </div>
      {hasSeparator && <div className={styles.separator} />}
    </>
  );
};
export default CardRow;
