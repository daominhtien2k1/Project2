import "./productitemcart.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {removeFromCart} from "../../../redux/actions/CartActions";
import {useDispatch} from "react-redux";

function ProductItemCart({item}){
    // console.log(item.productQuantity) //--(Relate-Lỗi 1)
    const [quantity, setQuantity] = useState(item.productQuantity);
    //Lỗi quantity khi ProductItemCart reload 2 lần nhưng chỉ set giá trị cũ vì setState chỉ set 1 lần (Lỗi 1)
    //Thêm 1 lỗi nữa xuất hiện khi không có useEffect(): lỗi xóa dòng Product dưới(trên) thì quantity nó bị nhầm của dòng trên(dưới) --Lỗi này không hiểu tại sao (Lỗi 2)
    useEffect(()=>{
        setQuantity(item.productQuantity)
    },[item.productQuantity])
    // console.log(quantity); //--(Relate-Lỗi 1)
    // console.log(item.productID,quantity); //--(Relate-Lỗi 2)
    const dispatch = useDispatch();
    const RemoveFromCartHandle = (id) => {
        // console.log(id); //--(Relate-Lỗi 2)
        dispatch(removeFromCart(id));
    }
    return (
        <tr className="row-cart">
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
            <td className="quantity">
                <div>
                    <input value={quantity} type={"number"} min={0} readOnly/>
                    <KeyboardArrowUpIcon className="icon1" onClick={() => setQuantity(quantity + 1)}/>
                    <KeyboardArrowDownIcon
                        className="icon2"
                        onClick={() => {
                            return quantity > 1 ? setQuantity(quantity - 1) : 1;
                        }}/>
                </div>
            </td>
            <td className="sub-total">
                <span>${quantity * item.productPrice}</span>
            </td>
            <td className="action-remove" onClick={()=>RemoveFromCartHandle(item.productID)}>
               <DeleteForeverIcon/>
            </td>
        </tr>
    )
}
export default ProductItemCart;