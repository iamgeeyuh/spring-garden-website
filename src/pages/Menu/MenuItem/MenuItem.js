import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  let prices = Object.keys(props.stats.prices).map((price) => {
    switch (price) {
      case "plain":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            Plain: {props.stats.prices["plain"]}
          </p>
        );
      case "small":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            Small: {props.stats.prices["small"]}
          </p>
        );
      case "large":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            Large: {props.stats.prices["large"]}
          </p>
        );
      case "riceFried":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            w. Fried Rice or French Fries: {props.stats.prices["riceFried"]}
          </p>
        );

      case "porkChicken":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            w. Pork or Chicken Fried Rice: {props.stats.prices["porkChicken"]}
          </p>
        );

      case "beefShrimp":
        return (
          <p key={Math.floor(Math.random() * 1000000000)}>
            w. Beef or Shrimp Fried Rice: {props.stats.prices["beefShrimp"]}
          </p>
        );
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
