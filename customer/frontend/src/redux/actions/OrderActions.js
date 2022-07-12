import axios from "axios";
import {logout} from "./UserActions";
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAIL_FAIL,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS
} from "../constants/OrderConstants";
import {CART_CLEAR_ITEMS} from "../constants/CartConstants";
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/ProductConstants";

// create order
export const createOrder = (order) => async (dispatch,getState) => {
    try {
        dispatch({type: ORDER_CREATE_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        const {data} = await axios.post(`/api/orders`, order, config);
        dispatch({type: ORDER_CREATE_SUCCESS, payload: data});
        dispatch({type: CART_CLEAR_ITEMS});
        localStorage.removeItem("cartItems");
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:message
        })
    }
}

// detail order
export const detailOrder= (id) => async (dispatch,getState) => {
    try {
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        try {
            dispatch({type: ORDER_DETAIL_REQUEST});
            const orderDetailResult = await axios.get(`/api/orders/order/${id}`,config);
            dispatch({type: ORDER_DETAIL_SUCCESS, payload: orderDetailResult.data});

        } catch (error) {
            dispatch({
                type: ORDER_DETAIL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:message
        })
    }
}

// list order
export const listOrders = () => async (dispatch,getState) => {
    try {
        const {
            userLogin: {userInfo}
        } = getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        try {
            dispatch({type: ORDER_LIST_REQUEST});
            const listOrdersResult = await axios.get("/api/orders",config);
            dispatch({type: ORDER_LIST_SUCCESS, payload: listOrdersResult.data});

        } catch (error) {
            dispatch({
                type: ORDER_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:message
        })
    }
}