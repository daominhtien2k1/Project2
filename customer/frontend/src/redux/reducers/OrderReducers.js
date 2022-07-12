import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_RESET,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAIL_FAIL,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS, ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS
} from "../constants/OrderConstants";

//create order
export const orderCreateReducer = (state={}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {...state, loading: true};
        case ORDER_CREATE_SUCCESS:
            return {loading: false, success: true, order: action.payload};
        case ORDER_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

//order detail
export const orderDetailReducer = (state = {}, action) => {
    switch (action.type){
        case ORDER_DETAIL_REQUEST:
            return {loading: true, ...state};
        case ORDER_DETAIL_SUCCESS:
            return {loading: false, order: action.payload};
        case ORDER_DETAIL_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

// list order
const initOrders = {orders: []};
export const orderListReducer = (state = initOrders, action) => {
    switch (action.type){
        case ORDER_LIST_REQUEST:
            return {loading: true, orders: []};
        case ORDER_LIST_SUCCESS:
            return {loading: false, orders: action.payload};
        case ORDER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}