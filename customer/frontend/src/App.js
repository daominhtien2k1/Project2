import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import AboutusScreen from "./screens/AboutusScreen";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import ShopListScreen from "./screens/ShopListScreen";
import ContactScreen from "./screens/ContactScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";
import WishListScreen from "./screens/WishListScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";
import ListOrdersScreen from "./screens/ListOrdersScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="CMapp">
           <div className="CMcontainer">
               <Topbar/>
               <Routes>
                   <Route path="/" element={<HomeScreen/>}></Route>
                   <Route path="/home" element={<HomeScreen/>}></Route>
                   <Route path="/product/:_id" element={<SingleProductScreen/>}></Route>
                   <Route path="/cart/:_id" element={<CartScreen/>}></Route>
                   <Route path="/cart" element={<CartScreen/>}></Route>
                   <Route path="/shoplist" element={<ShopListScreen/>}></Route>
                   <Route path="/aboutus" element={<AboutusScreen/>}></Route>
                   <Route path="/contact" element={<ContactScreen/>}></Route>
                   <Route path="/login" element={<LoginScreen/>}></Route>
                   <Route path="/register" element={<RegisterScreen/>}></Route>
                   <Route path="/account" element={<AccountScreen/>}>
                       <Route path="wishlist" element={<WishListScreen/>}/>
                       <Route path="profile" element={<ProfileScreen/>}/>
                       <Route path="shippingaddress" element={<ShippingAddressScreen/>}/>
                       <Route path="listorders" element={<ListOrdersScreen/>}/>
                   </Route>
                   <Route path="/order" element={<OrderScreen/>}/>
                   <Route path="/ordertracking/:id" element={<OrderTrackingScreen/>}/>
               </Routes>
               <Footer/>
           </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
