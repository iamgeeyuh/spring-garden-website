import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  let prices = Object.keys(props.stats.prices).map((price) => {
    switch (price) {
      case "plain":
        return <p>Plain: {props.stats.prices["plain"]}</p>;
      case "small":
        return <p>Small: {props.stats.prices["small"]}</p>;
      case "large":
        return <p>Large: {props.stats.prices["large"]}</p>;
      //prettier-ignore
      case "riceFried":
        return <p>w. Fried Rice or French Fries: {props.stats.prices["riceFried"]}</p>;
      //prettier-ignore
      case "porkChicken":
        return <p>w. Pork or Chicken Fried Rice: {props.stats.prices["porkChicken"]}</p>;
      //prettier-ignore
      case "beefShrimp":
        return <p>w. Beef or Shrimp Fried Rice: {props.stats.prices["beefShrimp"]}</p>;
    }
  });

  return (
    <div className={styles.item}>
      <h3>{props.stats.name}</h3>
      <div>{prices}</div>
    </div>
  );
};

export default MenuItem;
