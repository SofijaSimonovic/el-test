import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../Store";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  const deleteHandler = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    // .then(console.log);
    dispatch(deleteProduct(id));
    navigate("/");
  };

  return <div></div>;
};

export default NavBar;
