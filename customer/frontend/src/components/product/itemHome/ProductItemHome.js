import "./productitemhome.css"
import Rating from '@mui/material/Rating';
import {withStyles} from "@material-ui/core";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Link, useNavigate} from "react-router-dom";

function ProductItemHome({product}){
    const StyledRating = withStyles({
        iconFilled: {
            color: '#ffb300',
        },
        iconHover: {
            color: 'darkred',
        }
    })(Rating);

    const navigate = useNavigate();
    const AddToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${product._id}`);
    }
    return (
        <div className="product-item">
            <div className="item-wrapper">
                <div className="product-img-action-wrapper">
                    <div className="product-img-zoom">
                        <Link to={`/product/${product._id}`}>
                            <img className="default-img" src={product.defaultImg} alt=""/>
                            <img className="hover-img" src={product.hoverImg} alt=""/>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <VisibilityOutlinedIcon className="icon"/>
                        <FavoriteBorderOutlinedIcon className="icon"/>
                        <CompareArrowsIcon className="icon"/>
                    </div>
                    <div className="product-badges">
                        <span className="hot">New</span>
                    </div>
                </div>
                <div className="product-content-wrapper">
                    <div className="product-category">
                        <a href="/">{product.category}</a>
                    </div>
                    <h2>
                        <a href="/">Flowers Sleeve Lapel Shirt</a>
                    </h2>
                    <div className="rating-result">
                        <StyledRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <span style={{marginLeft: 5}}>90%</span>
                    </div>
                    <div className="product-price">
                        <span>{product.price}</span>
                        <span className="old-price">{product.price}</span>
                    </div>
                    <div className="product-action-2" onClick={AddToCartHandle}>
                        <AddShoppingCartOutlinedIcon className="icon"/>
                        <p>Add To Cart</p>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductItemHome;