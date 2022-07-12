import "./productbriefly.css"
import GavelIcon from "@mui/icons-material/Gavel";
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import {useState} from "react";
import {withStyles} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import {useNavigate} from 'react-router-dom';


const StyledRating = withStyles({
    iconFilled: {
        color: '#ffb300',
    },
    iconHover: {
        color: 'darkred',
    }
})(Rating);

function ProductBriefly({product}){
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const AddToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${product._id}?qty=${quantity}`);
    }
    return (
        <div className="briefly">
            <div className="product-image">
                <img src={product.defaultImg}
                     alt=""/>
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <div className="brand-rating-review">
                    <div className="brand">
                        <span> Brands: <a href="/">{product.brand}</a></span>
                    </div>
                    <div className="rating-review">
                        <StyledRating name="half-rating-read" defaultValue={2.5} value={product.star} precision={0.5} readOnly/>
                        <span style={{marginLeft: 5}}>{product.numReviews} reviews </span>
                    </div>
                </div>
                <div className="price-discountrate">
                    <span className="price">${product.price * (100-product.discount) / 100}</span>
                    <span className="old-price">${product.price}</span>
                    <span className="save-price">{product.discount}%</span>
                </div>
                <div className="short-description">
                    <p>{product.description}</p>
                </div>
                <div className="warranty-return">
                    <ul>
                        <li><GavelIcon/>1 Year Warranty</li>
                        <li><CachedIcon/>30 Day Return Policy</li>
                    </ul>
                </div>
                <div className="size">
                    <strong>Size</strong>
                    <ul className="list-size">
                        <li>S</li>
                        <li className="">M</li>
                        <li className="active">L</li>
                        <li className="">XL</li>
                        <li className="">XXL</li>
                    </ul>
                </div>
                <div className="quantity-cart-wishlist-compare">
                    <div className="quantity">
                        <input value={quantity} type={"number"} min={0} readOnly/>
                        <KeyboardArrowUpIcon className="icon1" onClick={() => setQuantity(quantity + 1)}/>
                        <KeyboardArrowDownIcon
                            className="icon2"
                            onClick={() => {
                                return quantity > 1 ? setQuantity(quantity - 1) : 1;
                            }}/>
                    </div>
                    <button className="addProduct" onClick={AddToCartHandle}>
                        <span>Add to cart</span>
                    </button>
                    <div className="wishlist">
                        <FavoriteBorderIcon style={{margin: 'auto', width: 18, height: 18}}/>
                    </div>
                    <div className="compare">
                        <CompareArrowsIcon style={{margin: 'auto', width: 18, height: 18}}/>
                    </div>
                </div>
                <div className="tag-availability">
                    <ul>
                        <li className="tag">Tags:<a> Cloth, Women, Dress</a></li>
                        <li className="">Availability: <span>8 Items In Stock</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductBriefly;