import styles from "../styles/Avatar.module.css";
import Image from "next/image";

const Avatar = ({img,size}) => {
  return (
    <Image
      src={img}
      alt="Avatar"
      width={size}
      height={size}
      className={styles.avatar}
    />
  );
};
export default Avatar;
