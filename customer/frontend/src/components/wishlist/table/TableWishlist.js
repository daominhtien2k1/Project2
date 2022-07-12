import "./tablewishlist.css"
import ProductItemWishlist from "../../product/itemWishlist/ProductItemWishlist";


function TableWishlist({cartItems}) {
    return (
        <table className="table-wishlist">
            <thead>
                <tr className="heading-table">
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                    <th scope="col">Add to cart</th>
                </tr>
            </thead>
            <tbody>
            {
                cartItems.map(item => <ProductItemWishlist item={item}/>)
            }
            </tbody>
        </table>
    )
}

export default TableWishlist;