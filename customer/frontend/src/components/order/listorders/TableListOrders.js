import "./tablelistorders.css"
import {Link} from "react-router-dom";
function TableListOrders({orders}) {
    return (
        <div className="listOrder-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Date Placed</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map(item => (
                    <tr>
                        <td className="py-3">
                            <Link to={`/ordertracking/${item._id}`}>{item._id}</Link>
                        </td>
                        <td className="py-3">{item.createdAt}</td>
                        <td className="py-3">
                            <span className="pending">{item.status}</span>
                        </td>
                        <td className="py-3">${item.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default TableListOrders;