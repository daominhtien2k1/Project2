import "./dashboard.css"
import Widget1 from "../components/widget/Widget1";
import Widget2 from "../components/widget/Widget2";
import "../components/chart/ColumnChart";
import ColumnChart from "../components/chart/ColumnChart";
import DonutChart from "../components/chart/DonutChart";
function DashboardScreen(){
    const typeWidget = {
        totalRevenue: 'Total Revenue',
        thisMonthRevenue:'This Month Revenue',
        todayRevenue: 'Today Revenue',

        totalOrder:'Total Order',
        orderPending:'Order Pending',
        orderProcessing: 'Order Processing',
        orderDelivered: 'Order Delivered'
    }
    return (
        <div className="dashboard">
            <h1>Dashboard Overview</h1>
            <div className="order-status-count">
                <Widget2 type={typeWidget.totalRevenue}/>
                <Widget2 type={typeWidget.thisMonthRevenue}/>
                <Widget2 type={typeWidget.todayRevenue}/>
            </div>
            <div className="order-per-time">
                <Widget1 type={typeWidget.totalOrder}/>
                <Widget1 type={typeWidget.orderPending}/>
                <Widget1 type={typeWidget.orderProcessing}/>
                <Widget1 type={typeWidget.orderDelivered}/>
            </div>
            <div className="statistic">
               <ColumnChart/>
               <DonutChart/>
            </div>

        </div>
    )
}
export default DashboardScreen;