import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import BackButton from "../UI/BackButton";
import NavBar from "../UI/NavBar";

const ProductSingle = (props) => {
    let params = useParams();
    const id = params.id


    const product = useSelector(state => state.products.products.filter(products => products.id === parseInt(id))[0]);

    const [pic, setPic] = useState(product.thumbnail);


    const changePicHandler = (id) => {
        setPic(product.images[id]);
    }

    return (
        <div></div>
    )
}

export default ProductSingle;