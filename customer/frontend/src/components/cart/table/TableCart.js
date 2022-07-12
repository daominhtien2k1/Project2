import "./tablecart.css"
import ProductItemCart from "../../product/itemCart/ProductItemCart";

function TableCart({cartItems}) {
    // console.log(cartItems); //--(Relate-Lỗi 1)
    return (
            <table className="table-cart">
                <thead>
                    <tr className="heading-table">
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cartItems.map(item =>  <ProductItemCart item={item}/>)
                }
                </tbody>
            </table>
    )
}

export default TableCart;