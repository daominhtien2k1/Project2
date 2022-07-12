import {CART_ADD_ITEM, CART_CLEAR_ITEMS, CART_REMOVE_ITEM} from "../constants/CartConstants";

const initCartItems = {
    cartItems: []
}

export const cartReducer = (state = initCartItems, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.productID === item.productID);
            if (existItem) {
                const itemReplaceToExist = {
                    ...existItem,
                    productQuantity: existItem.productQuantity + item.productQuantity
                };
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x === existItem ? itemReplaceToExist : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            const IDItemToRemove = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.productID !== IDItemToRemove)
            }
        case CART_CLEAR_ITEMS:
            return {cartItems: []};
        default:
            return state;
    }
}