import "./footer.css"
function Footer(){
    return (
        <div className="CMfooter">
            <div className="CMfooter-wrapper">
                <div>
                    <div className="logo">
                        <img src="https://cartzilla.createx.studio/img/logo-dark.png" alt="Girl in a jacket"
                             width="120"/>
                    </div>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                </div>
                <div>
                    <h5>About</h5>
                    <a>About Us</a>
                    <a>Delivery Information</a>
                    <a>Contact us</a>
                </div>
                <div>
                    <h5>My Account</h5>
                    <a>Sign In</a>
                    <a>View Cart</a>
                    <a>My Wishlist</a>
                    <a>Order</a>
                </div>
                <div>

                    <h5>Install App</h5>
                    <p>From App Store or Google Play</p>
                    <a style={{border: `2px solid #088178`, borderRadius: 5}}><img className="active" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/app-store.jpg" alt=""/></a>
                    <a style={{border: `2px solid #088178`, borderRadius: 5}}><img className="active" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/google-play.jpg" alt=""/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;