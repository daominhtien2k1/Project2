import "./accountscreen.css"
import TabBar from "../components/tabbar/TabBar";
import {useParams} from "react-router-dom";
import {Outlet} from 'react-router-dom';
function AccountScreen() {
    return (
        <div className="CM-AccountScreen">
            <div className="wrapper">
                <div className="tabbar-account">
                    <TabBar/>
                </div>
                <div className="tabcontent-account">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AccountScreen;