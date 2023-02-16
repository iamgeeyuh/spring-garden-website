const MenuItem = (props) => {
  return (
    <div>
      {props.item.name}
      {props.item.price}
    </div>
  );
};

export default MenuItem;
