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
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_SHIPPING_ADDRESS_FAIL,
    USER_UPDATE_SHIPPING_ADDRESS_REQUEST,
    USER_UPDATE_SHIPPING_ADDRESS_SUCCESS,
    USER_SHIPPING_ADDRESS_LIST_SUCCESS,
    USER_SHIPPING_ADDRESS_LIST_REQUEST,
    USER_SHIPPING_ADDRESS_LIST_FAIL
} from "../constants/UserConstants";

//login
const initUser= {
   userInfo: {},
}
export const userLoginReducer = (state = initUser, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true, userInfo: null};
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload, userInfo: null};
        case USER_LOGOUT:
            return {userInfo: null};
        default:
            return state;
    }
}

//register
export const userRegisterReducer = (state = initUser, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true, userInfo: null};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload, userInfo: null};
        default:
            return state;
    }
}

//profile
export const userDetailsReducer = (state = initUser, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {loading: true, userInfo: null};
        case USER_DETAILS_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_DETAILS_FAIL:
            return {loading: false, error: action.payload, userInfo: null};
        case USER_DETAILS_RESET:
            return {userInfo: null}
        default:
            return state;
    }
}

//updateProfile
export const userUpdateProfileReducer = (state = initUser, action) => {
    switch (action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading: true};
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true, userInfo: action.payload};
        case USER_UPDATE_PROFILE_FAIL:
            return {loading: false, error: action.payload};
        case USER_UPDATE_PROFILE_RESET:
            return {userInfo: {}};
        default:
            return state;
    }
}

//list shipping address
const initShippingAddresses = { shippingAddresses: []}
export const userListShippingAddressReducer = (state = initShippingAddresses, action) => {
    switch (action.type){
        case USER_SHIPPING_ADDRESS_LIST_REQUEST:
            return {loading: true, shippingAddresses: []};
        case USER_SHIPPING_ADDRESS_LIST_SUCCESS:
            return {loading: false,shippingAddresses: action.payload};
        case USER_SHIPPING_ADDRESS_LIST_FAIL:
            return {loading: false, error: action.payload, shippingAddresses: []};
        default:
            return state;
    }
}

//create shipping address
export const userCreateShippingAddressReducer = (state = {}, action) => {
    switch (action.type){
        case USER_CREATE_SHIPPING_ADDRESS_REQUEST:
            return {loading: true};
        case USER_CREATE_SHIPPING_ADDRESS_SUCCESS:
            return {loading: false, success: true};
        case USER_CREATE_SHIPPING_ADDRESS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

//delete shipping address
export const userDeleteShippingAddressReducer = (state = {}, action) => {
    switch (action.type){
        case USER_DELETE_SHIPPING_ADDRESS_REQUEST:
            return {loading: true};
        case USER_DELETE_SHIPPING_ADDRESS_SUCCESS:
            return {loading: false, success: true};
        case USER_DELETE_SHIPPING_ADDRESS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

//update shipping address
const initAddress = {address: {}}
export const userUpdateShippingAddressReducer = (state = initAddress, action) => {
    switch (action.type){
        case USER_UPDATE_SHIPPING_ADDRESS_REQUEST:
            return {loading: true};
        case USER_UPDATE_SHIPPING_ADDRESS_SUCCESS:
            return {loading: false, success: true, address: action.payload};
        case USER_UPDATE_SHIPPING_ADDRESS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

