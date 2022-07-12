import "./cartscreen.css"
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToCart} from "../redux/actions/CartActions";
import TableCart from "../components/cart/table/TableCart";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ApprovalIcon from '@mui/icons-material/Approval';

function CartScreen() {
    window.scrollTo(0, 0);
    const params = useParams();
    const {_id} = params;
    const qty = window.location.search ? Number(window.location.search.split("&")[0].split("=")[1]) : 1;

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const subTotalCart = cartItems.reduce(
        (previousValue, item) => previousValue + item.productQuantity * item.productPrice,
        0
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (_id) {
            dispatch(addToCart(_id, qty));
        }
    }, [dispatch, _id, qty]);

    const navigate = useNavigate();
    const CheckoutHandle = () => {
        navigate("/order");
    }
    // console.log(cartItems); //--(Relate-Lỗi 1)
    return (
        <div className="cart">
            {cartItems.length === 0 ?
                <div className="empty-cart">
                    <img src="https://necksip.com/wp-content/uploads/2020/05/empty-cart.jpg" alt=""
                         style={{display: `block`, margin: `auto`}} onClick={() => navigate("/shoplist")}/>
                    <div className="continue-shopping" style={{margin: `auto`, width: `fit-content`}}>
                        <button>
                            <span>
                                <ApprovalIcon style={{fontSize: 20}}/>
                                <span onClick={() => {
                                    navigate("/")
                                }}>Shopping now</span>
                            </span>
                        </button>
                    </div>
                </div> :
                <div className="wrapper">
                    <TableCart cartItems={cartItems}/>
                    <div className="continue-shopping" onClick={() => {
                        navigate("/")
                    }}>
                        <button>
                            <span>
                                <ApprovalIcon style={{fontSize: 20}}/>
                                <span>Continue Shopping</span>
                            </span>
                        </button>
                    </div>
                    <div className="coupon-total">
                        <div className="coupon">
                            <h4>Apply Coupon</h4>
                            <div>
                                <input placeholder="Enter your coupon" style={{cursor: "not-allowed"}}/>
                                <div className="apply-coupon">
                                    <button>
                                    <span>
                                         <ApprovalIcon style={{fontSize: 20}}/>
                                         <span style={{cursor: "not-allowed"}}>Apply</span>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            <h4>Cart Totals</h4>
                            <div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="cart_total_label">Cart Subtotal</td>
                                        <td className="cart_total_amount"><span
                                            className="font-lg fw-900 text-brand">${subTotalCart}</span></td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">Shipping</td>
                                        <td className="cart_total_amount"><i className="ti-gift mr-5"></i> Free Shipping
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_total_label">Total</td>
                                        <td className="cart_total_amount"><strong><span
                                            className="font-xl fw-900 text-brand">${subTotalCart}</span></strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="checkout">
                                <button onClick={CheckoutHandle}>
                                    <span>
                                         <CreditCardIcon style={{fontSize: 20}}/>
                                         <span>Proceed to checkout</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartScreen;