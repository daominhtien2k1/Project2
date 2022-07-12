import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import "./slider.css"
import {useState} from "react";
const sliderItems = [
    {
        id: 1,
        img: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-1.png",
        title: "Trade-in offer",
        subtitle: "Supper value deals",
        desc: "On all products",
        subdesc: "Save more with coupons & up to 70% off",
        bg: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/btn-brush-bg-1.png",
    }
    ,
    {
        id: 2,
        img: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-2.png",
        title: "Hot promotions",
        subtitle: "Fashion Trending",
        desc: "Great Collection",
        subdesc: "Save more with coupons & up to 20% off",
        bg: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/btn-brush-bg-2.png",
    },
    {
        id: 3,
        img: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-3.png",
        title: "Upcoming Offer",
        subtitle: "Big Deals From",
        desc: "Manufacturer",
        subdesc: "Clothing, Shoes, Bags, Wallets...",
        bg: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/btn-brush-bg-3.png",
    },
];

function Slider (){
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className="HS-slider">
            <div className="arrow-left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <div className="wrapper"
                 style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                {
                    sliderItems.map((item, index) => (
                        <div className="slide" bg={item.bg} key={item.id}>
                            <div className="infoContainer">
                                <h4>{item.title}</h4>
                                <h2>{item.subtitle}</h2>
                                <h1>{item.desc}</h1>
                                <p>{item.subdesc}</p>
                                <a style={{backgroundImage: `url(${item.bg})`}}>Shop now</a>
                            </div>
                            <div className="imgContainer">
                                <img src={item.img}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="arrow-right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}
export default Slider;