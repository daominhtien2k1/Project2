import "./categorycarousel.css"
import {useState} from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import Slider from "infinite-react-carousel";

const categories = [
    {
        id: 1,
        category: 'T-shirt',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-1.jpg'
    }, {
        id: 2,
        category: 'Bag',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-2.jpg'
    }, {
        id: 3,
        category: 'Sanda',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-3.jpg'
    }, {
        id: 4,
        category: 'Scarf Cap',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-4.jpg'
    }, {
        id: 5,
        category: 'Shoes',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-5.jpg'
    }, {
        id: 6,
        category: 'Pilowcase',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-6.jpg'
    }, {
        id: 7,
        category: 'Jumpsuits',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-7.jpg'
    }, {
        id: 8,
        category: 'Hats',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-8.jpg'
    }, {
        id: 9,
        category: 'T-shirt',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-1.jpg'
    }, {
        id: 10,
        category: 'Bag',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-2.jpg'
    }, {
        id: 11,
        category: 'Sanda',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-3.jpg'
    }, {
        id: 12,
        category: 'Scarf Cap',
        img: 'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-4.jpg'
    }
]

function CategoryCarousel() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleClick = (direction) => {
        console.log("Start:" + carouselIndex);
        if (direction === "left") {
            setCarouselIndex(carouselIndex === 0 ? 0 : carouselIndex - 1);
            console.log(carouselIndex);
        } else {
            setCarouselIndex(carouselIndex === categories.length - 6 ? categories.length - 6 : carouselIndex + 1);
            console.log(carouselIndex);
        }
    };

    return (
        <div className="HS-category">
            <div className="category-wrapper">
                <div className="category-title">
                    Popular Categories
                </div>
                <div className="arrow-left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined/>
                </div>
                <div className="category-carousel">
                    {
                        categories.map((item, index) => {
                            return (
                                    <div
                                        className={(index >= carouselIndex && index <= carouselIndex + 6) ? "itemCategory-active" : "itemCategory"}
                                        key={index}>
                                        {(index >= carouselIndex && index <= carouselIndex + 6) &&
                                            <img src={item.img} alt=""/>}
                                        {(index >= carouselIndex && index <= carouselIndex + 6) &&
                                            <h5>{item.category}</h5>}
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

export default CategoryCarousel