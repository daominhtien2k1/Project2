import {
    USER_CREATE_SHIPPING_ADDRESS_FAIL,
    USER_CREATE_SHIPPING_ADDRESS_REQUEST,
    USER_CREATE_SHIPPING_ADDRESS_SUCCESS,
    USER_DELETE_SHIPPING_ADDRESS_FAIL,
    USER_DELETE_SHIPPING_ADDRESS_REQUEST,
    USER_DELETE_SHIPPING_ADDRESS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_SHIPPING_ADDRESS_FAIL,
    USER_UPDATE_SHIPPING_ADDRESS_REQUEST,
    USER_UPDATE_SHIPPING_ADDRESS_SUCCESS,
    USER_SHIPPING_ADDRESS_LIST_REQUEST, USER_SHIPPING_ADDRESS_LIST_SUCCESS, USER_SHIPPING_ADDRESS_LIST_FAIL
} from "../constants/UserConstants";
import axios from "axios";
import {PRODUCT_CREATE_REVIEW_FAIL} from "../constants/ProductConstants";

//login
export const login = (email,password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST});
        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // }
        const userResult = await axios.post(`api/users/login`, {email, password});
        dispatch({type: USER_LOGIN_SUCCESS, payload: userResult.data});
        localStorage.setItem("userInfo", JSON.stringify(userResult.data));
    }catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//logout
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type: USER_LOGOUT});
    dispatch({type: USER_DETAILS_RESET});
}

//register
export const register = (info) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST});
        const userResult = await axios.post(`api/users/register`, info);
        dispatch({type: USER_REGISTER_SUCCESS, payload: userResult.data});
        dispatch({type: USER_LOGIN_SUCCESS, payload: userResult.data});
        localStorage.setItem("userInfo", JSON.stringify(userResult.data));
    }catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//profile
export const getUserDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        const {data} = await axios.get(`/api/users/${id}`,config);
        dispatch({type: USER_DETAILS_SUCCESS, payload: data});
    }catch (error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:message
        })
    }
}

//updateProfile
export const updateProfile = (info) => async (dispatch,getState) => {
    try {
        dispatch({type: USER_UPDATE_PROFILE_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        const {data} = await axios.put(`/api/users/profile`, info, config);
        dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//list shipping address
export const listShippingAddresses = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_SHIPPING_ADDRESS_LIST_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        const {data} = await axios.get(`/api/users/shippingAddresses`, config);
        dispatch({type: USER_SHIPPING_ADDRESS_LIST_SUCCESS, payload: data});
    }catch (error) {
        dispatch({
            type: USER_SHIPPING_ADDRESS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//create shipping address
export const createShippingAddress = (address) => async (dispatch,getState) => {
    try {
        dispatch({type: USER_CREATE_SHIPPING_ADDRESS_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        await axios.post(`/api/users/shippingAddress`, address, config);
        dispatch({type: USER_CREATE_SHIPPING_ADDRESS_SUCCESS});
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: USER_CREATE_SHIPPING_ADDRESS_FAIL,
            payload:message
        })
    }
}

//delete shipping address
export const deleteShippingAddress = (id) => async (dispatch,getState) => {
    try {
        dispatch({type: USER_DELETE_SHIPPING_ADDRESS_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        await axios.delete(`/api/users/shippingAddress/${id}`,config);
        dispatch({type: USER_DELETE_SHIPPING_ADDRESS_SUCCESS});
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: USER_DELETE_SHIPPING_ADDRESS_FAIL,
            payload:message
        })
    }
}

//update shipping address
export const updateShippingAddress = (id,address) => async (dispatch,getState) => {
    try {
        dispatch({type: USER_UPDATE_SHIPPING_ADDRESS_REQUEST});
        const {
            userLogin: {userInfo}
        }=getState();
        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        };
        const {data} = await axios.put(`/api/users/shippingAddress/${id}`, address, config);
        dispatch({type: USER_UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: data});
    }catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized, token failed")
            dispatch(logout())
        dispatch({
            type: USER_UPDATE_SHIPPING_ADDRESS_FAIL,
            payload:message
        })
    }
}
