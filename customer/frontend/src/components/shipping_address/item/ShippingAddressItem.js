import "./shippingaddressitem.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {updateShippingAddress} from "../../../redux/actions/UserActions";
import {useDispatch, useSelector} from "react-redux";

function ShippingAddressItem({item,onStatusDeleteAddress,onStatusEditAddress}){
    const userListShippingAddress = useSelector(state => state.userListShippingAddress);
    const {loading, error, shippingAddresses} = userListShippingAddress;

    const dispatch = useDispatch();
    const handleDefaultAddress = () => {
        dispatch(updateShippingAddress(item._id,{isDefault: true}));
        const idAddressToNonDefaultArray = shippingAddresses.filter(address => address._id !== item._id);
        for(var x of idAddressToNonDefaultArray){
            console.log(x._id)
            dispatch(updateShippingAddress(x._id,{isDefault: false}))
        }
        window.location.reload();
    }
    return (
        <tr className="row-shippingAddress">
            <td className="address">
                <span>{item.telephone}, Số {item.lane}, Đường {item.street}, Quận {item.district}, TP {item.city}</span>
                {item.isDefault ?  <span className="default">Default</span> : <span/>}
            </td>
            <td className="action-edit" onClick={()=>onStatusEditAddress(item._id)}>
                <ModeEditOutlineOutlinedIcon/>
            </td>
            <td className="action-remove" onClick={() => onStatusDeleteAddress(item._id)}>
                <DeleteForeverIcon/>
            </td>
            <td className="action-setAsDefault">
                <button className={item.isDefault ? "default" : "nondefault"} disabled={item.isDefault} onClick={handleDefaultAddress}>Set as default</button>
            </td>
        </tr>
    )
}
export default ShippingAddressItem;