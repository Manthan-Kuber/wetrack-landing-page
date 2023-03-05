import {
  FaStripe,
  FaPinterest,
  FaMicrosoft,
  FaCcPaypal,
  FaAmazon,
} from "react-icons/fa";
import { SiWalmart, SiZoom } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import styles from "../styles/IconsList.module.css"

const IconsArray = [
  { id: 1, Icon: FaStripe },
  { id: 2, Icon: FaPinterest },
  { id: 3, Icon: SiWalmart },
  { id: 4, Icon: SiZoom },
  { id: 5, Icon: FaMicrosoft },
  { id: 6, Icon: BsGoogle },
  { id: 7, Icon: FaCcPaypal },
  { id: 8, Icon: FaAmazon },
];

const IconsList = () => {
  return (
    <ul className={styles.grid} >
      {IconsArray.map(({ id, Icon }) => (
        <li key={id}>
          <Icon size={40} />
        </li>
      ))}
    </ul>
  );
};
export default IconsList;
