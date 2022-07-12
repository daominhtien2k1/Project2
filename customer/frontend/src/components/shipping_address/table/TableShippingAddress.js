import "./tableshippingaddress.css"
import ShippingAddressItem from "../item/ShippingAddressItem";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteShippingAddress} from "../../../redux/actions/UserActions";

function TableShippingAddress({shippingAddresses,onStatusEditAddress}) {
    const dispatch = useDispatch();

    //status modal cảnh báo delete
    const [active,setActive] = useState(false);
    const [_id,set_ID] = useState(0);

    // bật modal delete cảnh báo và nhận _id tương ứng từ Component con ShippingAddressItem
    const handleStatusDeleteAddress = (_id) => {
        setActive(true);
        //lưu lại _id cho Component cha để phục vụ handleDeleteAddresṣ(_id)
        set_ID(_id);
    }
    // tắt modal delete cảnh báo
    const handleStatusCloseDeleteAddress = () => {
        setActive(false);
    }

    const handleDeleteAddress = (_id) => {
        dispatch(deleteShippingAddress(_id));
        setActive(false);
        window.location.reload();
    }

    return (
        <div>
            <table className="table-shippingAddress">
                <thead>
                <tr className="heading-table">
                    <th scope="col">Address</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    <th scope="col">Set as default</th>
                </tr>
                </thead>
                <tbody>
                {
                    shippingAddresses.map(item => <ShippingAddressItem item={item} onStatusDeleteAddress={handleStatusDeleteAddress} onStatusEditAddress={onStatusEditAddress}/>)
                }
                </tbody>
            </table>

            <div className={active? "delete-container-modal-active" : "delete-container-modal"}>
                <div className="box">
                    <h3>Delete Address</h3>
                    <p>Are you sure you want to delete?</p>
                    <div className="warn_info">
                        <h4><i className="fa fa-warning"/>Warning</h4>
                        <p>By deleting this address, you can't undo this action.</p>
                    </div>
                    <div className="clearfix">
                        <button className="cancel" onClick={handleStatusCloseDeleteAddress}>Cancel</button>
                        <button className="delete" onClick={()=>handleDeleteAddress(_id)}>Delete <i className="fa fa-trash"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableShippingAddress;