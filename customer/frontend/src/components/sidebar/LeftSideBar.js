import "./leftsidebar.css"
import {Slider} from "@material-ui/core";
import {useState} from "react";
function LeftSideBar(){
    const [value, setValue] = useState([20, 37]);
    const [minPrice,maxPrice] = value;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="shoplist-sidebar">
            <div className="sidebar-wrapper">
                <div className="category">
                        <h5 className="section-title">Category</h5>
                        <ul className="categories">
                            <li><a href="/">Shoes &amp; Bags</a></li>
                            <li><a href="/">Blouses &amp; Shirts</a></li>
                            <li><a href="/">Dresses</a></li>
                            <li><a href="/">Swimwear</a></li>
                            <li><a href="/">Beauty</a></li>
                            <li><a href="/">Jewelry &amp; Watch</a></li>
                            <li><a href="/">Accessories</a></li>
                        </ul>
                </div>
                <div className="fill">
                    <h5 className="section-title">Fill by price</h5>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        max={200}
                        style={{color: '#088178'}}
                    />
                    <div className="price_slider_amount">
                        <div className="label-input">
                            <span>Range:</span>
                            <input type="text" value={`$${minPrice}`}/>
                            {'-'}
                            <input type="text" value={`$${maxPrice}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftSideBar;