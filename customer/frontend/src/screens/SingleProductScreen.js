import "./singleproductscreen.css"
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailProduct} from "../redux/actions/ProductActions";
import ProductBriefly from "../components/product/itemBriefly/ProductBriefly";
import ProductDetail from "../components/product/itemDetail/ProductDetail";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";


function SingleProductScreen() {
    const params = useParams();
    //phải giống :_id trong <Route/> trong App.js
    const {_id} = params;

    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const {loading, error, product} = productDetail;
    useEffect(() => {
        dispatch(detailProduct(_id));
    }, [dispatch, _id])

    window.scrollTo(0, 0);
    return (
        <div className="CM-singleProduct">
            <div className="wrapper">
                {
                    loading ?
                        <CircularProgress color="success"/> :
                        error ?
                            <Alert variant="filled" severity="error">
                                Request failed. Please try again!
                            </Alert> :
                                Object.keys(product).length !== 0 ?
                                    <div>
                                        <ProductBriefly product={product}/>
                                        <ProductDetail product={product}/>
                                    </div> :
                                    <CircularProgress color="success"/>
                }
            </div>
        </div>
    )
}

export default SingleProductScreen;