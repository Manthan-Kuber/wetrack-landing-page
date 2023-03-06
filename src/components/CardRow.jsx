import styles from "../styles/CardRow.module.css"
import Avatar from "./Avatar"

const CardRow = ({title,time,avatar1,avatar2}) => {
  return (
    <div className={styles.container} >
        <div  className={styles.flex} >
            <div className={styles.outline_circle}/>
            <span>{title}</span>
        </div>
        <div className={styles.flex}>
            <span>{time}</span>
            <div>
                <Avatar img={avatar1} size={35} />
                <Avatar img={avatar2} size={35} />
            </div>
        </div>
    </div>
  )
}
export default CardRow