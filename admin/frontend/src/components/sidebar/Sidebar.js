import "./sidebar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Meomun</span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <Link to="/">
                            <GridViewIcon className="icon"/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <Inventory2OutlinedIcon className="icon"/>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <a>
                            <FormatListBulletedIcon className="icon"/>
                            <span>Category</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <PeopleOutlineIcon className="icon"/>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <ExploreOutlinedIcon className="icon"/>
                            <span>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <CardGiftcardOutlinedIcon className="icon"/>
                            <span>Coupons</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <PersonOutlineIcon className="icon"/>
                            <span>Our staff</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <SettingsIcon className="icon"/>
                            <span>Setting</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <button className="logout">
                    <span>
                        <LogoutIcon style={{ fontSize: 16 }}/>
                        <span>Log out</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar;