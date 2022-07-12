import "./widget2.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreditCardIcon from '@mui/icons-material/CreditCard';
function Widget2({type}){
    let data;
    switch (type){
        case 'Total Revenue':
            data = {
                title: 'Total Revenue',
                backgroundColor: '#0E9F6E',
                value: 95000,
                icon: CreditCardIcon
            }
            break;
        case 'This Month Revenue':
            data = {
                title: 'This Month Revenue',
                backgroundColor: '#3F83F8',
                value: 5000,
                icon: ShoppingCartOutlinedIcon
            }
            break;
        case 'Today Revenue':
            data = {
                title: 'Today Revenue',
                backgroundColor: '#0694A2',
                value: 300,
                icon: NewspaperIcon
            }
            break;
    }
    let Icon = data.icon;
    return (
        <div className="widget2" style={{backgroundColor: data.backgroundColor}}>
            <div className="widget2-wrapper">
                <Icon className="icon" />
                <p className="title">{data.title}</p>
                <p className="value">${data.value}</p>
            </div>
        </div>
        )
}
export default Widget2;