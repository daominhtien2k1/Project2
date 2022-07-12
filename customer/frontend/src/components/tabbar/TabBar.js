import "./tabbar.css"
import {Link} from "react-router-dom";

function TabBar() {
    return (
        <div className="account-tabbar">
            <div className="tabbar-wrapper">
                <div className="tab">
                    <div className="dashboard">
                        <h5 className="section-title">Dashboard</h5>
                        <ul className="categories">
                            <li>
                                <Link to="listorders">Orders</Link>
                                <span>2</span>
                            </li>
                            <li>
                                <Link to="wishlist">Wishlist</Link>
                                <span>3</span>
                            </li>
                        </ul>
                    </div>
                    <div className="account-setting">
                        <h5 className="section-title">Account settings</h5>
                        <ul className="categories">
                            <li> <Link to ="profile">Profile info</Link> </li>
                            <li> <Link to ="shippingaddress">Shipping address</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabBar;