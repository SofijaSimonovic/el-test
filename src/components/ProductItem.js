import Card from "./UI/Card";
import { useNavigate } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const prod = props.item;

  let navigate = useNavigate();

  return (
    <li>
      <div className={classes.card}>
        <img src={prod.thumbnail} className={classes.img} />
        <div className={classes.el}>
          <p>{prod.title}</p>
          <p>{prod.category}</p>
          <p>{prod.price}$</p>
          <div className={classes.btn}>
            <button className={classes.bel} onClick={() => {navigate(`/product/${prod.id}`)}}>View details</button>
            <button className={classes.bel}  onClick={() => {navigate(`/product/edit/${prod.id}`)}}>Edit</button>
            <button className={classes.bel}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
