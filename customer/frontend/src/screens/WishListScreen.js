import TableWishlist from "../components/wishlist/table/TableWishlist";
import {useSelector} from "react-redux";

function WishListScreen(){
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    return (
        <div className="CM-wishlist">
            <TableWishlist cartItems={cartItems}/>
        </div>
    )
}
export default WishListScreen;