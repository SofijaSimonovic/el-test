import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../UI/NavBar";
import BackButton from "../UI/BackButton";
import {useEffect, useState} from "react";
import {addProduct} from "../../Store";

const ProductNew = () => {
    let navigate = useNavigate();

    const [prod, setProd] = useState([]);

    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);

    const nextId = useSelector(state => {
        return state.products.products.slice(-1)[0].id + 1;
    });

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
        setCategories(response);
    };

    useEffect(() => {
        getApiData()
    }, []);

    const [charLeft, setCharLeft] = useState(400);

    const textAreaChangeHandler = evt => {
        setCharLeft(400 - evt.target.value.toString().length)
    }

    const formChangeHandler = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setProd((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const formSubmitHandler = evt => {
        evt.preventDefault();

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...prod
            })
        })
            .then(res => res.json())
        // .then(console.log);

        dispatch(addProduct({
            ...prod,
            id: nextId,
            thumbnail: 'https://placehold.co/400',
            images: ['https://placehold.co/400', 'https://placehold.co/400', 'https://placehold.co/400',
            ]
        }))

        navigate('/');
    }

    return (
        <div></div>
    );

}

export default ProductNew;