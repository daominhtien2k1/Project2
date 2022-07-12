import "./productcontainer.css"
import ProductItemHome from "../itemHome/ProductItemHome";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../../redux/actions/ProductActions";


function ProductContainer() {
    const dispatch = useDispatch();
    /*
       const productList = useSelector((state) => state);
       console.log(productList);
        <-- Học tập -->
    */
    const productList = useSelector((state) => state.productList);
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const {loading,error,products} = productList;
    // console.log(productList.products);    //<-- Học tập -->

    return (
            <div className="productContainer">
                {
                    loading ?
                        <CircularProgress color="success"/>
                        : error ?
                            <Alert variant="filled" severity="error">
                                Request failed. Please try again!
                            </Alert>
                            : products.map((product) => (
                                <ProductItemHome product={product} key={product.id}/>
                            ))
                }
            </div>
    )
}

export default ProductContainer;