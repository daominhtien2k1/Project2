import "./homescreen.css"
import Slider from "../components/slider/Slider"
import BrandCarousel from "../components/brand/carousel/BrandCarousel";
import FeaturedSection from "../components/feature/carousel/FeaturedSection";
import ProductContainer from "../components/product/container/ProductContainer";
import CategoryCarousel from "../components/category/carousel/CategoryCarousel";


function HomeScreen() {

    return (
        <div className="CMHomeSreen">
            <Slider/>
            <FeaturedSection/>
            <div className="HS-product">
                <ProductContainer/>
            </div>
            <CategoryCarousel/>
            <div className="banner-event">
                <div className="banner-wrapper">
                    <div className="banner-content">
                        <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                        <h2 className="fw-600">
                            Happy
                            <span className="text-brand"> Mother's Day</span>
                            . Big Sale Up to 40%
                        </h2>
                    </div>
                </div>
            </div>
            <BrandCarousel/>

        </div>
    )
}

export default HomeScreen;