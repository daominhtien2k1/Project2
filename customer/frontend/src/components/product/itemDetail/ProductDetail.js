import "./productdetail.css"
import CustomerReview from "../../review_comment/customerreview/CustomerReview";
import ProgressbarStar from "../../review_comment/star/ProgressbarStar";
import Rating from "@mui/material/Rating";
import {withStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PRODUCT_CREATE_REVIEW_RESET} from "../../../redux/constants/ProductConstants";
import Alert from '@mui/material/Alert';
import {Link} from "react-router-dom";
import {createProductReview} from "../../../redux/actions/ProductActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StyledRating = withStyles({
    iconFilled: {
        color: '#ffb300',
    },
    iconHover: {
        color: 'darkred',
    }
})(Rating);

function ProductDetail({product}){
    const [star, setStar] = useState(1);
    const [comment,setComment] = useState('');
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const productCreateReview = useSelector((state) => state.productCreateReview);
    const {loading,success,error} = productCreateReview;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(success){
            toast.success('Review added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setStar(0);
            setComment("");
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET});
        }
        if(error){
            toast.error('Product already reviewed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setStar(0);
            setComment("");
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET});
        }

    },[dispatch,product._id,success,error])
    const submitReviewHandle = (e) => {
        e.preventDefault();
        const review = {star,comment};
        dispatch(createProductReview(product._id, review));
    }

    return (
        <div className="detail">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
            <div className="description"></div>
            <div className="additional-info"></div>
            <div className="reviews">
                <h3>Reviews <span> ({product.numReviews}) </span></h3>
                <div className="reviews-wrapper">
                    <div className="review-col">
                        <h4>Customer questions &amp; answers</h4>
                        <div className="comment-list">
                            {
                                product.reviews.length!==0 ?
                                    product.reviews.map(review => <CustomerReview review={review}/>)
                                    :
                                    <Alert severity="info" style={{width: 'fit-content'}}>No reviews</Alert>
                            }
                        </div>
                    </div>
                    <div className="review-col">
                        <h4>Customer reviews</h4>
                        <div className="average-review">
                            <StyledRating defaultValue={2.5} precision={0.5} readOnly/>
                            4.8 out of 5
                        </div>

                        <div className="list-progress">
                            <ProgressbarStar percent={50} star={5}/>
                            <ProgressbarStar percent={25} star={4}/>
                            <ProgressbarStar percent={45} star={3}/>
                            <ProgressbarStar percent={65} star={2}/>
                            <ProgressbarStar percent={85} star={1}/>
                        </div>
                    </div>
                </div>
            </div>
            {
                userInfo ?
                    <form onSubmit={submitReviewHandle}>
                        <div className="leave-a-review">
                            <h4>Add a review</h4>
                            <Rating
                                name="simple-controlled"
                                value={star}
                                onChange={(event, newValue) => {
                                    setStar(newValue);
                                }}
                                style={{fontSize: 18}}
                            />
                            <textarea placeholder="Write comment" value={comment}
                                      onChange={(e) => setComment(e.target.value)}/>
                            <button className="submit-review">
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>
                    :
                    <Alert variant="filled" severity="error" style={{width: 'fit-content'}}>
                        Please <Link to="/login"><strong>Login</strong></Link> to write a review
                    </Alert>
            }
        </div>
    )
}
export default ProductDetail;