import "./orderscreen.css"
import {useEffect, useReducer, useState} from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {useNavigate} from "react-router-dom";
import TableReviewOrder from "../components/order/revieworder/table/TableReviewOrder";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails, listShippingAddresses, updateShippingAddress} from "../redux/actions/UserActions";
import {createOrder} from "../redux/actions/OrderActions";
import {toast, ToastContainer} from "react-toastify";
const initProfileInfo = {
    city: '',
    district: '',
    neighborhood: '',
    street: '',
    lane: 0,
    telephone: ''
}
const setAction = {
    Set_City: 'Set_City',
    Set_District: 'Set_District',
    Set_Neighborhood: 'Set_Neighborhood',
    Set_Street: 'Set_Street',
    Set_Lane: 'Set_Lane',
    Set_Telephone: 'Set_Telephone',
    Set_AllInit: 'Set_AllInit'
}
const reducer = (state, action) => {
    switch (action.type) {
        case setAction.Set_City:
            return {...state, city: action.payload};
        case setAction.Set_District:
            return {...state, district: action.payload};
        case setAction.Set_Neighborhood:
            return {...state, neighborhood: action.payload};
        case setAction.Set_Street:
            return {...state, street: action.payload};
        case setAction.Set_Lane:
            return {...state, lane: action.payload};
        case setAction.Set_Telephone:
            return {...state, telephone: action.payload};
        case setAction.Set_AllInit:
            return action.payload;
        default:
            return state;
    }
}

function OrderScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [info, dispatchLocal] = useReducer(reducer, initProfileInfo);
    const [statusChange,setStatusChange] = useState(false);
    const [statusAddAddress,setStatusAddAddress] = useState(false);

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const handlePlaceOrder = () => {
        const orderItems = cartItems.map(item => ({product: item.productID, qty: item.productQuantity}));
        const shippingAddress = statusChange ? info: defaultAddress;
        const total = cartItems.reduce(
            (previousValue, item) => previousValue + item.productQuantity * item.productPrice,
            0
        );
        dispatch(createOrder({orderItems,shippingAddress,total}));
    }

    const orderCreate = useSelector(state => state.orderCreate);
    const {loading,success,error,order} = orderCreate;
    useEffect(()=>{
        if(order !== {} && order !== undefined) {
            navigate(`/ordertracking/${order._id}`);
        }else{
            if(error && !loading) {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    },[order,success,error,loading]);

    //get list shipping address
    useEffect(() => {
        dispatch(listShippingAddresses());
        dispatch(getUserDetails("profile"));
    }, [dispatch]);
    const userListShippingAddress = useSelector(state => state.userListShippingAddress);
    const {shippingAddresses} = userListShippingAddress;
    const userDetails = useSelector(state => state.userDetails);
    const {userInfo} = userDetails;

    const defaultAddress = shippingAddresses.find(address => address.isDefault === true);
    const checkedDefaultAddress = defaultAddress ? defaultAddress._id : '';
    const [checked,setChecked] = useState(checkedDefaultAddress);
    useEffect(()=>{
        setChecked(checkedDefaultAddress);
    },[checkedDefaultAddress]);

    const handleDefaultAddress = () => {
        dispatch(updateShippingAddress(checked,{isDefault: true}))
        const idAddressToNonDefaultArray = shippingAddresses.filter(address => address._id !== checked);
        for(var x of idAddressToNonDefaultArray){
            dispatch(updateShippingAddress(x._id,{isDefault: false}))
        }
        window.location.reload();
    }



    return (
        <div className="CM-OrderScreen">
            <div className="container">
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
                <div className="card-shippingAddress">
                    <div className="address-container">
                        <div className="title-info-address">
                            <LocationOnOutlinedIcon/>
                            <h4>Shipping Address</h4>
                            <div className="use-set-address">
                                <button className="useAddress"
                                        onClick={() => setStatusAddAddress(!statusAddAddress)}>Using temp address
                                </button>
                                <button className="setAddress" onClick={() => navigate("/account/shippingaddress")}>Establish
                                    address
                                </button>
                            </div>
                        </div>
                        {!statusChange &&
                            <div className="info-address">
                                <h4 className="name-telephone">{userInfo? userInfo.name: ""} {defaultAddress ? defaultAddress.telephone: ""}</h4>
                                <div className="address">{defaultAddress ? defaultAddress.lane: ""}, {defaultAddress ? defaultAddress.street: ""}, {defaultAddress ? defaultAddress.district: ""}, {defaultAddress ? defaultAddress.neighborhood: ""}, {defaultAddress ? defaultAddress.city: ""}</div>
                                <div className="action">
                                    <h4 className="default">Default</h4>
                                    <h4 className="change-address" onClick={() => setStatusChange(true)}>Change</h4>
                                </div>
                            </div>
                        }
                        {statusChange && <div className="list-addresses-select">
                            {shippingAddresses.map(address => {
                                return (
                                    <div className="info-address-item">
                                        <input
                                            type="radio"
                                            checked={checked === address._id}
                                            onChange={()=>setChecked(address._id)}
                                        />
                                        <h4 className="name-telephone">{userInfo.name} {address.telephone}</h4>
                                        <div className="address">{address.lane}, {address.street}, {address.district}, {address.neighborhood}, {address.city}</div>
                                    </div>
                                )})
                            }
                            {
                                <div className="buttons">
                                    <button className="complete" onClick={handleDefaultAddress}>Complete</button>
                                    <button className="back" onClick={() => setStatusChange(false)}>Back</button>
                                </div>
                            }
                        </div>
                        }
                        {statusAddAddress && <form>
                            <div className="form-group">
                                <input type="text" required placeholder="City" value={info.city}
                                       onChange={(e) => dispatchLocal({
                                           type: setAction.Set_City, payload: e.target.value
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="District" value={info.district}
                                       onChange={(e) => dispatchLocal({
                                           type: setAction.Set_District, payload: e.target.value
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="Neighborhood" value={info.neighborhood}
                                       onChange={(e) => dispatchLocal({
                                           type: setAction.Set_Neighborhood,
                                           payload: e.target.value
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="Street" value={info.street}
                                       onChange={(e) => dispatchLocal({
                                           type: setAction.Set_Street, payload: e.target.value
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="number" required placeholder="Lane" value={info.lane}
                                       onChange={(e) => dispatchLocal({
                                           type: setAction.Set_Lane, payload: e.target.value
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="Telephone" value={info.telephone}
                                       onChange={(e) => dispatchLocal({
                                           type:setAction.Set_Telephone, payload: e.target.value}
                                       )}/>
                            </div>
                        </form>
                        }
                    </div>
                    <div className="payment">
                        <div className="title">
                            <h4 className="header">Payment</h4>
                            <div className="icons">
                                <img src="https://img.icons8.com/color/48/000000/visa.png"/>
                                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
                                <img src="https://img.icons8.com/color/48/000000/maestro.png"/>
                            </div>
                        </div>
                        <form>
                            <span>Cardholder's name:</span>
                            <input placeholder="Linda Williams"/>
                            <span>Card Number:</span>
                            <input placeholder="0125 6780 4567 9909"/>
                            <span>Expiry date:</span>
                            <input placeholder="YY/MM"/>
                            <span>CVV:</span>
                            <input placeholder="CVV"/>
                        </form>
                    </div>


                </div>
                <div className="review-order">
                    <TableReviewOrder cartItems={cartItems}/>
                    <div onClick={handlePlaceOrder}>
                        <button className="placeOrder">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderScreen;