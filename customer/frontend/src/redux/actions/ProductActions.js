import {
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/ProductConstants";
import axios from "axios";
import {logout} from "./UserActions";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const listProductsResult = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: listProductsResult.data});

    }catch (error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const detailProduct = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAIL_REQUEST});
        const productDetailResult = await axios.get(`/api/products/product/${id}`);
        dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: productDetailResult.data});

    }catch (error){
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createProductReview = (productId,review) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_CREATE_REVIEW_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        await axios.post(`/api/products/product/${productId}/review`,review,config);
        dispatch({type: PRODUCT_CREATE_REVIEW_SUCCESS});
    }catch (error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload:message
        })
    }
}