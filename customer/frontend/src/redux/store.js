import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {productCreateReviewReducer, productDetailReducer, productListReducer} from "./reducers/ProductReducers";
import {cartReducer} from "./reducers/CartReducers";
import {
    userCreateShippingAddressReducer, userDeleteShippingAddressReducer,
    userDetailsReducer, userListShippingAddressReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer, userUpdateShippingAddressReducer
} from "./reducers/UserReducers";
import {orderCreateReducer, orderDetailReducer, orderListReducer} from "./reducers/OrderReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    productCreateReview: productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userListShippingAddress: userListShippingAddressReducer,
    userCreateShippingAddress: userCreateShippingAddressReducer,
    userDeleteShippingAddress: userDeleteShippingAddressReducer,
    userUpdateShippingAddress: userUpdateShippingAddressReducer,
    orderCreate: orderCreateReducer,
    orderDetail: orderDetailReducer,
    orderList: orderListReducer
});
const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [];
const userInfoFromLocalStogare  = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")): null;
const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStogare
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;