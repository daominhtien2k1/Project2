import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./widget1.css"
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';
function Widget1({type}) {
    let data;
    switch (type){
        case 'Total Order':
            data = {
                title: 'Total Order',
                backgroundIconColor: '#FCD9BD',
                backgroundColor: '#FFF',
                iconColor: '#D03801',
                value: 188,
                icon: ShoppingCartOutlinedIcon
            }
            break;
        case 'Order Pending':
            data = {
                title: 'Order Pending',
                backgroundIconColor: '#C3DDFD',
                backgroundColor: '#FFF',
                iconColor: '#1C64F2',
                value: 38,
                icon: AutorenewIcon
            }
            break;
        case 'Order Processing':
            data = {
                title: 'Order Processing',
                backgroundIconColor: '#AFECEF',
                backgroundColor: '#FFF',
                iconColor: '#047481',
                value: 66,
                icon: LocalShippingOutlinedIcon
            }
            break;
        case 'Order Delivered':
            data = {
                title: 'Order Delivered',
                backgroundIconColor: '#BCF0DA',
                backgroundColor: '#FFF',
                iconColor: '#057A55',
                value: 68,
                icon: DoneIcon
            }
            break;
    }
    let Icon = data.icon;
    return (
        <div className="widget1">
            <div className="widget1-wrapper">
                <Icon className="icon" style={{backgroundColor: data.backgroundIconColor, color: data.iconColor}}/>
                <div>
                    <p>{data.title}</p>
                    <p>{data.value}</p>
                </div>
            </div>
        </div>
    )
}

export default Widget1;