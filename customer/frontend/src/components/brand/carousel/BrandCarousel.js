import "./brandcarousel.css"
import {useState} from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import Slider from "infinite-react-carousel";

const brands = [
    {
        id: 1,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-1.png'
    }, {
        id: 2,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-2.png'
    }, {
        id: 3,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-3.png'
    }, {
        id: 4,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-4.png'
    }, {
        id: 5,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-5.png'
    }, {
        id: 6,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-6.png'
    }, {
        id: 7,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-1.png'
    }, {
        id: 8,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-2.png'
    }, {
        id: 9,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-3.png'
    }, {
        id: 10,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-4.png'
    }, {
        id: 11,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-5.png'
    }, {
        id: 12,
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/brand-6.png'
    }
]

function BrandCarousel() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleClick = (direction) => {
        console.log("Start:" + carouselIndex);
        if (direction === "left") {
            setCarouselIndex(carouselIndex === 0 ? 0 : carouselIndex - 1);
            console.log(carouselIndex);
        } else {
            setCarouselIndex(carouselIndex === brands.length - 6 ? brands.length - 6 : carouselIndex + 1);
            console.log(carouselIndex);
        }
    };

    return (
        <div className="HS-brand">
            <div className="brand-wrapper">
                <div className="brand-title">
                    Featured Brands
                </div>
                <div className="arrow-left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined/>
                </div>
                <div className="brand-carousel">
                    {
                        brands.map((item, index) => {
                            return (
                                <div
                                    className={(index >= carouselIndex && index <= carouselIndex + 6) ? "itemBrand-active" : "itemBrand"}
                                    key={index}>
                                    {(index >= carouselIndex && index <= carouselIndex + 6) &&
                                        <img src={item.img} alt=""/>}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="arrow-right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined/>
                </div>
            </div>
        </div>
    )
}

export default BrandCarousel;