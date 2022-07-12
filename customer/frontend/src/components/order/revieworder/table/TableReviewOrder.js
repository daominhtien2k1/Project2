import "./tablerevieworder.css"
import {useSelector} from "react-redux";
function TableReviewOrder({cartItems}){
    const subTotalCart = cartItems.reduce(
        (previousValue, item) => previousValue + item.productQuantity * item.productPrice,
        0
    );
    return (
        <div className="review-order-table">
            <h4>Your Orders</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Product</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems.map(item =>
                    <tr>
                        <td className="image product-thumbnail">
                            <img
                                src={item.productImage}
                                alt="#"/>
                        </td>
                        <td>
                            <h5>
                                <a href="">{item.productName}</a>
                            </h5>
                            <span className="product-qty">x {item.productQuantity}</span>
                        </td>
                        <td>${item.productQuantity * item.productPrice}</td>
                    </tr>
                )}
                    <tr>
                        <th>SubTotal</th>
                        <td className="product-subtotal" colSpan="2">${subTotalCart}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td colSpan="2"><em>Free Shipping</em></td>
                    </tr>
                    <tr>
                        <th>Coupon</th>
                        <td colSpan="2" className="product-coupon"><span
                            className="font-xl text-brand fw-900">0%</span></td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td colSpan="2" className="product-subtotal"><span
                            className="font-xl text-brand fw-900">${subTotalCart}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableReviewOrder;