import "./productitemwishlist.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link} from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useDispatch} from "react-redux";

function ProductItemWishList({item}){
    const dispatch = useDispatch();
    const RemoveFromWishList = (id) => {
        // dispatch(removeFromCart(id));
    }
    return (
        <tr className="row-wishlist">
            <td className="image-product-thumbnail">
                <img src={item.productImage} alt="#"/>
            </td>
            <td className="product-name">
                <Link to={`/product/${item.productID}`}>
                    <h5>{item.productName}</h5>
                </Link>
            </td>
            <td className="price">
                <span>{item.productPrice}</span>
            </td>
            <td className="action-remove">
                <DeleteForeverIcon/>
            </td>
            <td className="action-add">
                <AddShoppingCartIcon/>
            </td>
        </tr>
    )
}
export default ProductItemWishList;