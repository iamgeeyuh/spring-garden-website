import styles from "./Home.module.css";
import img from "../../img/home.jpg";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import HomeContact from "./HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <div>
          <h5>Welcome to</h5>
          <h1>Spring Garden</h1>
          <Link to="/Menu">View Menu</Link>
        </div>
        <img src={img} c></img>
      </div>
      <HomeContact />
      <Map />
    </div>
  );
};

export default Home;
