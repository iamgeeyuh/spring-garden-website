import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.scrollContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
