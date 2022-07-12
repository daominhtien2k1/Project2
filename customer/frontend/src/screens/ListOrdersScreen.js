import "./listordersscreen.css";
import TableListOrders from "../components/order/listorders/TableListOrders";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {listOrders} from "../redux/actions/OrderActions";
function ListOrdersScreen(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listOrders());
    },[dispatch]);
    const orderList = useSelector(state => state.orderList);
    const {orders} = orderList;
    return (
        <div className="CM-ListOrders">
            <TableListOrders orders={orders}/>
        </div>
    )
}
export default ListOrdersScreen;