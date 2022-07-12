import "./shoplistscreen.css"
import LeftSideBar from "../components/sidebar/LeftSideBar";
import ProductContainer from "../components/product/container/ProductContainer";


function ShopListScreen() {
    return (
        <div className="CMShopListScreen">
            <div className="wrapper">
                <div className="HS-left-sidebar">
                    <LeftSideBar/>
                </div>
                <div className="HS-list-product">
                   <ProductContainer/>
                </div>
            </div>
        </div>
    )
}

export default ShopListScreen;