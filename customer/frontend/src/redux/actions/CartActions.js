import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/CartConstants";
import axios from "axios";

export const addToCart = (id,qty) => async (dispatch,getState) => {
    // nếu không có / đầu tiên: `api/products/product/${id}` thì dẫn tới link: http://localhost:3001/cart/api/products/product/62ad41d
    const {data} = await axios.get(`/api/products/product/${id}`);
    const product = data;
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            productID: product._id,
            productName: product.name,
            productImage: product.defaultImg,
            productPrice: product.price,
            productCountInStock: product.countInStock,
            productQuantity: qty
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}