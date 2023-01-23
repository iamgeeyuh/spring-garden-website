import styles from "./Home.module.css";
import img from "../../img/spread.jpg";
import { Link } from "react-router-dom";
import HomeMap from "./HomeMap/HomeMap";
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
        <img src={img} alt="A table full of Chinese food."></img>
      </div>
      <HomeContact />
      <HomeMap />
    </div>
  );
};

export default Home;
