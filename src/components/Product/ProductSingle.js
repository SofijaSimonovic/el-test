import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BackButton from "../UI/BackButton";
import NavBar from "../UI/NavBar";

const ProductSingle = (props) => {
  let params = useParams();
  const id = params.id;

  const product = useSelector(
    (state) =>
      state.products.products.filter(
        (products) => products.id === parseInt(id)
      )[0]
  );

  const [pic, setPic] = useState(product.thumbnail);

  const changePicHandler = (id) => {
    setPic(product.images[id]);
  };

  return (
    <div>
      {product.images.length > 1 &&
        product.images.map((img, id) => {
          return (
            <div
              key={id}
              className={"image-wrapper col col-lg-12 mx-2 mx-lg-0 d-flex"}
            >
              <div className={"overlay"}></div>
              <img src={img.toString()} alt="" className={"img-fluid"} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductSingle;
