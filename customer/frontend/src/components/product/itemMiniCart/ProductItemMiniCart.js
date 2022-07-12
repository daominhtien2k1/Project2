import "./productitemminicart.css"
import CloseIcon from '@mui/icons-material/Close';
function ProductItemMiniCart(){
    return (
        <div className="productMiniCartItem">
            <div>
                <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-3-1.jpg"></img>
            </div>
            <div className="shopping-cart-title">
                <h4><a href="/">Daisy Casual Bag</a></h4>
                <h3><span>1 × </span>$800.00</h3>
            </div>
            <div>
                <CloseIcon/>
            </div>
        </div>
    )
}
export default ProductItemMiniCart;