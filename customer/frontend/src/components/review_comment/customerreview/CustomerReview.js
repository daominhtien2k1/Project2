import "./customerreivew.css"
import {withStyles} from "@material-ui/core";
import Rating from "@mui/material/Rating";

const StyledRating = withStyles({
    iconFilled: {
        color: '#ffb300',
    },
    iconHover: {
        color: 'darkred',
    }
})(Rating);

function CustomerReview({review}) {
    return (
        <div className="single-customer-review">
            <div className="thumb-image-customer">
                <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/avatar-6.jpg" alt=""/>
                <h6>{review.author}</h6>
            </div>
            <div className="desc">
                <StyledRating name="half-rating-read" defaultValue={2.5} value={review.star} precision={0.5} readOnly/>
                <p className="comment">{review.comment}</p>
                <p className="time">{review.createdAt}</p>
            </div>
        </div>
    )
}

export default CustomerReview;