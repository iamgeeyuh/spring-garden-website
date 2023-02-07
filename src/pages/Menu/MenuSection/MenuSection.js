import MenuItem from "../MenuItem/MenuItem";
import MenuDropDown from "../MenuDropDown.js/MenuDropDown";

const MenuSection = (props) => {
  return (
    <div>
      <MenuDropDown name={props.name} />
      <div>
        {props.items.map((item) => {
          return <MenuItem stats={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default MenuSection;
