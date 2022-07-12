import "./topbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar, Badge} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
function Topbar() {
    return (
        <div className="topbar">
            <ul className="topbar-right">
                <li className="icon"><DarkModeIcon/></li>
                <li>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon className="icon"/>
                    </Badge>
                </li>
                <li>
                    <Avatar alt="Remy Sharp" src="/image/avatar.jpg" className="icon"/>
                </li>
            </ul>

        </div>
    )
}
export default Topbar;