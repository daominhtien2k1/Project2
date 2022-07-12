import "./ordertrackingscreen.css"
import TableReviewOrder from "../components/order/revieworder/table/TableReviewOrder";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {ORDER_CREATE_RESET} from "../redux/constants/OrderConstants";
import {useParams} from "react-router-dom";
import {detailOrder} from "../redux/actions/OrderActions";

function OrderTrackingScreen() {
    const cancel = true;

    const orderCreate = useSelector(state => state.orderCreate);
    const {success} = orderCreate;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(success) {
            toast.success("Create order successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            dispatch({type: ORDER_CREATE_RESET});
        }
    },[])

    const params = useParams();
    const {id} = params;
    useEffect(() => {
        dispatch(detailOrder(id));
    }, [dispatch, id]);
    const orderDetail = useSelector(state => state.orderDetail);
    const {loading: loadingOrder, error: errorOrder, order}= orderDetail;

    return (
        <div className="CM-OrderTracking">
            <div className="wrapper">
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
                <div className="status-trackingorder">
                    <div className="order-tracking completed">
                        <span className="is-complete"></span>
                        <p>Pending</p>
                    </div>
                    <div className="order-tracking">
                        <span className="is-complete"></span>
                        <p>Processing</p>
                    </div>
                    {!cancel && <div className="order-tracking">
                        <span className="is-complete"></span>
                        <p>Delivered</p>
                    </div>}
                    {cancel && <div className="order-tracking">
                            <span className="is-complete"></span>
                            <p>Cancel</p>
                        </div>
                    }
                </div>
                <div className="review-order">
                    <TableReviewOrder cartItems={order ? order.products: []}/>
                </div>
            </div>
        </div>
    )
}

export default OrderTrackingScreen;