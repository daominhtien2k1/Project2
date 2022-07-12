import "./loginscreen.css"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {login} from "../redux/actions/UserActions";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import {toast, ToastContainer} from "react-toastify";
import {USER_UPDATE_PROFILE_RESET} from "../redux/constants/UserConstants";

function LoginScreen() {
    window.scrollTo(0, 0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state) => state.userLogin);
    const {error, loading, userInfo} = userLogin;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        /* luôn redirect khi nhập sai vì lỗi userInfo luôn {}
            case USER_LOGIN_REQUEST:
                    return {loading: true, userInfo: {}};
            case USER_LOGIN_SUCCESS:
                    return {loading: false, userInfo: action.payload};
            case USER_LOGIN_FAIL:
                    return {loading: false, error: action.payload};
         */
        if (userInfo) {
            navigate("/");
        }
    }, [userInfo, navigate]);

    const submitHandle = (e) => {
        e.preventDefault(); //nếu không có dòng này sẽ tự redirect load lại trang /login? và Error biến mất
        dispatch(login(email, password));
    }

    return (
        <div className="CMlogin">
            <div className="container">
                {loading && <CircularProgress color="success"/>}
                {error && <Alert variant="filled" severity="error">
                    {error}
                </Alert>}
                <div className="wrapper">
                            <div className="title"><span>Login Form</span></div>
                            <form onSubmit={submitHandle}>
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Email or Phone" value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} required/>
                                </div>
                                <div className="row">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" value={password}
                                           onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
                                <div className="pass"><a href="#">Forgot password?</a></div>
                                <div className="row button">
                                    <input type="submit" value="Login"/>
                                </div>
                                <div className="signup-link">Not a member? <Link
                                    to="/register">Signup now</Link>
                                </div>
                            </form>
                        </div>
            </div>
        </div>
    )
}

export default LoginScreen;