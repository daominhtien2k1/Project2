import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Badge} from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LogoutIcon from '@mui/icons-material/Logout';
import {styled} from "@mui/material/styles";
import "./topbar.css"
import ProductItemMiniCart from "../product/itemMiniCart/ProductItemMiniCart";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/UserActions";
function Topbar() {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    const StyledBadge = styled(Badge)(({top, width, height}) => ({
        "& .MuiBadge-badge": {
            top: top,
            width: width,
            height: height,
            borderRadius: 9999
        }
    }));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateHandle = () => {
        if (userInfo)
            navigate('/account');
        else
            navigate('/login');
    }
    const navigateHandle2 = () => {
        if (userInfo) {
            dispatch(logout());
            navigate('/login');
        }
        else
            navigate("/login");
    }
    return (
        <div className="CMtopbar">
            <div className="CMtopbar-top">
                <div className="CMtopbar-top-wrapper">
                    <div className="info-left">
                        <div>
                            <li><PhoneIphoneIcon style={{width: 12, height: 12, marginRight: 4}}/></li>
                            <li>(+01)-2345-6789</li>
                        </div>
                        <div>
                            <LocationOnOutlinedIcon style={{width: 12, height: 12, marginRight: 4}}/>
                            <p>Our location</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p>
                            <marquee>Supper Value Deals - Save more with coupons - Save more - Save more more</marquee>
                        </p>
                    </div>
                    <div className="info-right" onClick={navigateHandle2}>
                        <PersonOutlineOutlinedIcon style={{width: 12, height: 12, marginRight: 4}}/>
                        <p>{userInfo? "Logout" : "Login" }</p>
                    </div>
                </div>
            </div>
            <div className="CMtopbar-middle">
                <div className="CMtopbar-middle-wrapper">
                    <div className="middle-left">
                        <div className="logo">
                            <img src="https://cartzilla.createx.studio/img/logo-dark.png" alt="Girl in a jacket"
                                 width="120"/>
                        </div>
                    </div>
                    <div className="middle-center">
                        <input type="text" placeholder="Search for items..."/>
                        <i className="bi bi-search"></i>
                    </div>
                    <div className="middle-right">
                        <div className="icon">
                            <StyledBadge badgeContent={4} color="success" top={0} width={20} height={20}>
                                <FavoriteBorderIcon/>
                            </StyledBadge>
                        </div>
                        <div className="container-icon-info" onClick={navigateHandle}>
                            <div className="icon">
                                <StyledBadge badgeContent={4} color="success" top={0} width={20} height={20}>
                                    <PersonOutlineOutlinedIcon/>
                                </StyledBadge>
                            </div>
                            <div className="topbar-info-collumn">
                                <p style={{color: '#7d879c', fontSize: 14}}>Hello {userInfo ? userInfo.name : "Sign in"}</p>
                                <p>My Account</p>
                            </div>
                        </div>
                        <div style={{position: "relative"}} className="container-icon-info dropdown-minicart">
                            <div style={{backgroundColor: '#F3F5F9', borderRadius: 9999}} className="icon" onClick={()=> navigate("/cart")}>
                                <StyledBadge badgeContent={4} color="success" top={-5} width={25} height={25}>
                                    <ShoppingCartOutlinedIcon/>
                                </StyledBadge>
                            </div>
                            <div className="topbar-info-collumn" onClick={()=> navigate("/cart")}>
                                <p style={{color: '#7d879c', fontSize: 14}}>My Cart</p>
                                <p>$265.00</p>
                            </div>
                            <div className="mini-cart">
                                <div className="listProductInMiniCart">
                                    <ProductItemMiniCart/>
                                    <ProductItemMiniCart/>
                                    <ProductItemMiniCart/>
                                    <ProductItemMiniCart/>
                                </div>
                                <div className="mini-cart-footer">
                                    <div className="mini-cart-total" onClick={()=> navigate("/cart")}>
                                        <h4>Total <span>$4000.00</span></h4>
                                    </div>
                                    <div className="mini-cart-button">
                                        <Link to="/cart">View cart</Link>
                                        <Link to="/checkout">Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CMtopbar-bottom">
                <div className="CMtopbar-bottom-wrapper">
                    <div className="bottom-left">
                        <span><WindowOutlinedIcon/></span>
                        <p style={{color: '#39b4ac', fontSize: 18, fontWeight: 700, paddingLeft: 4}}>Browse
                            Categories</p>
                    </div>
                    <div className="bottom-center">
                        <Link to={"/home"}><p>Home</p></Link>
                        <Link to={"/shoplist"}><p>Shop</p></Link>
                        <Link to={"/account"}><p>Account</p></Link>
                        <Link to={"/aboutus"}><p>About us</p></Link>
                        <Link to={"/contact"}><p>Contact</p></Link>
                    </div>
                    <div className="bottom-right">
                        <div>
                            <HeadphonesIcon fontSize='small'/>
                        </div>
                        <div>
                            <p>Hotline</p>
                            <p style={{color: '#39b4ac', fontSize: 18, fontWeight: 700}}>1900-888</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;