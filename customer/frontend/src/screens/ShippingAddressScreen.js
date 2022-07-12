import "./shippingaddressscreen.css"
import TableShippingAddress from "../components/shipping_address/table/TableShippingAddress";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useReducer, useState} from "react";
import {
    createShippingAddress,
    listShippingAddresses,
    updateShippingAddress
} from "../redux/actions/UserActions";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const initAddressInfo = {
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
        case setAction.Set_Nationality:
            return {...state, nationality: action.payload};
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

function ShippingAddressScreen() {
    const dispatch = useDispatch();
    //get list shipping address
    useEffect(() => {
        dispatch(listShippingAddresses());
    }, [dispatch]);
    const userListShippingAddress = useSelector(state => state.userListShippingAddress);
    const {loading, error, shippingAddresses} = userListShippingAddress;

    // các trường trong modal dialog create-edit
    const [address, dispatchLocal] = useReducer(reducer, initAddressInfo);

    //trạng thái modal dialog là Add hay Edit để bật modal dialog tương ứng hoặc đóng
    const [statusAddAddress, setStatusAddAddress] = useState(false);
    const [statusEditAddress, setStatusEditAddress] = useState(false);

    // add shipping address
    const handleAddAddress = (e) => {
        e.preventDefault();
        dispatch(createShippingAddress(address));
        dispatchLocal({type: setAction.Set_AllInit, payload: initAddressInfo});
        setStatusAddAddress(false);
        window.location.reload();
    }

    // update shipping address
    const [_id,set_ID] = useState('');
    const handleEditAddress = () => {
        dispatch(updateShippingAddress(_id,address));
        dispatchLocal({type: setAction.Set_AllInit, payload: initAddressInfo});
        setStatusEditAddress(false);
        window.location.reload();
    }

    // bật modol dialog edit và nhận _id từ Component con TableShippingAddress và ShippingAddressItem
    const handleStatusEditAddress = (_id) => {
        setStatusEditAddress(true);
        // lưu lại _id phục vụ cho handleEditAddress
        set_ID(_id);
        const address = shippingAddresses.find(address => address._id === _id);
        dispatchLocal({type: setAction.Set_City, payload: address.city});
        dispatchLocal({type: setAction.Set_District, payload: address.district});
        dispatchLocal({type: setAction.Set_Neighborhood, payload: address.neighborhood});
        dispatchLocal({type: setAction.Set_Street, payload: address.street});
        dispatchLocal({type: setAction.Set_Lane, payload: address.lane});
        dispatchLocal({type: setAction.Set_Telephone, payload: address.telephone});
    }

    const handleStatusCloseModal = () => {
        setStatusAddAddress(false);
        setStatusEditAddress(false);
        dispatchLocal({type: setAction.Set_AllInit, payload: initAddressInfo});
    }
    return (
        <div className="CM-shippingAddress">
            {
                loading ?
                    <CircularProgress color="success"/>
                    : error ?
                        <Alert variant="filled" severity="error">
                            Request failed. Please try again!
                        </Alert> :
                        <TableShippingAddress shippingAddresses={shippingAddresses} onStatusEditAddress={handleStatusEditAddress}/>
            }
            <div className="addShippingAddress" onClick={()=>setStatusAddAddress(true)}>
                <button>Add new address</button>
            </div>
            { (statusAddAddress || statusEditAddress) && <div className="add-edit-address">
                <span className="title">Address Details</span>
                <div className="fields">
                    <div className="input-field">
                        <label>City</label>
                        <input type="text" placeholder="Enter your city" value={address.city}
                               onChange={(e) => dispatchLocal({
                                   type: setAction.Set_City, payload: e.target.value
                               })}
                               required/>
                    </div>
                    <div className="input-field">
                        <label>District</label>
                        <input type="text" placeholder="Enter your district" value={address.district}
                               onChange={(e) => dispatchLocal({
                                   type: setAction.Set_District, payload: e.target.value
                               })}
                               required/>
                    </div>
                    <div className="input-field">
                        <label>Neighborhood</label>
                        <input type="text" placeholder="Enter your neighborhood" value={address.neighborhood}
                               onChange={(e) => dispatchLocal({
                                   type: setAction.Set_Neighborhood,
                                   payload: e.target.value
                               })} required/>
                    </div>
                    <div className="input-field">
                        <label>Street</label>
                        <input type="text" placeholder="Enter your street" value={address.street}
                               onChange={(e) => dispatchLocal({
                                   type: setAction.Set_Street, payload: e.target.value
                               })}
                               required/>
                    </div>
                    <div className="input-field">
                        <label>Lane</label>
                        <input type="number" placeholder="Enter your lane" value={address.lane}
                               onChange={(e) => dispatchLocal({
                                   type: setAction.Set_Lane, payload: e.target.value
                               })}
                               required/>
                    </div>
                    <div className="input-field">
                        <label>Telephone</label>
                        <input type="text" placeholder="Enter telephone" value={address.telephone}
                               onChange={(e) => dispatchLocal({
                                   type:setAction.Set_Telephone, payload: e.target.value}
                               )} required/>
                    </div>
                </div>
                <div className="buttons">
                    <button className="close" onClick={handleStatusCloseModal}>
                        <span className="close">Close</span>
                    </button>
                    {
                        statusAddAddress &&
                        <button className="add-address" onClick={handleAddAddress}>
                            <span className="add">Add address</span>
                        </button>
                    }
                    {
                        statusEditAddress &&
                        <button className="edit-address" onClick={handleEditAddress}>
                            <span className="edit">Edit address</span>
                        </button>
                    }
                </div>
            </div>}
        </div>
    )
}

export default ShippingAddressScreen;