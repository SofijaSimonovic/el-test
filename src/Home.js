import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProductItem from "./components/ProductItem";
import NavBar from "./components/UI/NavBar";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "./Store";

const Home = (props) => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const dispatch = useDispatch();

  let length = products.length;

  const navigate = useNavigate();

  let displayCount;
  if (length > 9) {
    displayCount = 9;
  } else {
    displayCount = length;
  }

  const [visible, setVisible] = useState(9);

  const loadMore = () => {
    setVisible((prevState) => {
      if (prevState + 9 <= length) {
        return prevState + 9;
      } else {
        return (prevState = length);
      }
    });
  };

  const deleteHandler = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    // .then(console.log);
    dispatch(deleteProduct(id));
    navigate("/");
  };

  // const isLoading = () => {
  //     if(length == 0){
  //         return true;
  //     }
  //     else{
  //         return false;
  //     }
  // }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductItem item={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
