import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../UI/NavBar";
import BackButton from "../UI/BackButton";
import {useEffect, useState} from "react";
import {updateProduct} from "../../Store";

const ProductEdit = () => {
    let params = useParams();
    const id = params.id;

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const product = useSelector(state => state.products.products.filter(products => products.id === parseInt(id))[0]);

    const [editProd, setEditProd] = useState(product);

    const [pic, setPic] = useState(product.thumbnail);

    const [categories, setCategories] = useState([]);

    const changePicHandler = (id) => {
        setPic(product.images[id]);
    }

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
        setCategories(response);
    };

    useEffect(() => {
        getApiData()
    }, []);

    const [charLeft, setCharLeft] = useState(400 - product.description.toString().length);

    const textAreaChangeHandler = evt => {
        setCharLeft(400 - evt.target.value.toString().length)
    }

    const formChangeHandler = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setEditProd((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const formSubmitHandler = evt => {
        evt.preventDefault();

        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...editProd
            })
        })
            .then(res => res.json())

        dispatch(updateProduct(editProd));

        navigate('/');
    }

    return (
        <div></div>
    )

}

export default ProductEdit;