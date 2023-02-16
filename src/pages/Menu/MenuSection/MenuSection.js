import styles from "./MenuSection.module.css";
import MenuItem from "../MenuItem/MenuItem";

const MenuSection = (props) => {
  return (
    <div className={styles.menuSection} id={props.id}>
      <h2>{props.name}</h2>
      {props.items.map((item) => {
        return <MenuItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default MenuSection;
