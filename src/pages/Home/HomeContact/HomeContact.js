import styles from "./HomeContact.module.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className={styles.homeContact}>
      <a href="tel:+7189510881">(718) 951 0881</a>
      <Link to="./Menu">Order Now</Link>
    </div>
  );
};

export default HomeContact;
