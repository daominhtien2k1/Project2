import "./registerscreen.css"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useReducer} from "react";
import {register} from "../redux/actions/UserActions";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const initRegisterInfo = {
    accountName: '',
    password: '',
    name: '',
    dateOfBirth: '',
    email: '',
    telephone: '',
    gender: '',
    occupation: '',
    nationality: '',
    city: '',
    district: '',
    neighborhood: '',
    street: '',
    lane: 0,
}

const setAction = {
    Set_AccountName: 'Set_AccountName',
    Set_Password: 'Set_PassWord',
    Set_Name: 'Set_Name',
    Set_DateOfBirth: 'Set_DateOfBirth',
    Set_Email: 'Set_Email',
    Set_Telephone: 'Set_Telephone',
    Set_Gender: 'Set_Gender',
    Set_Occupation: 'Set_Occupation',
    Set_Nationality: 'Set_Nationality',
    Set_City: 'Set_City',
    Set_District: 'Set_District',
    Set_Neighborhood: 'Set_Neighborhood',
    Set_Street: 'Set_Street',
    Set_Lane: 'Set_Lane',
}

const reducer = (state, action) => {
    switch (action.type) {
        case setAction.Set_AccountName:
            return {...state, accountName: action.payload};
        case setAction.Set_Password:
            return {...state, password: action.payload};
        case setAction.Set_Name:
            return {...state, name: action.payload};
        case setAction.Set_DateOfBirth:
            return {...state, dateOfBirth: action.payload};
        case setAction.Set_Email:
            return {...state, email: action.payload};
        case setAction.Set_Telephone:
            return {...state, telephone: action.payload};
        case setAction.Set_Gender:
            return {...state, gender: action.payload};
        case setAction.Set_Occupation:
            return {...state, occupation: action.payload};
        case setAction.Set_Nationality:
            return {...state, nationality: action.payload};
        case setAction.Set_City:
            return {...state, city: action.payload};
        case setAction.Set_District:
            return {...state, district: action.payload};
        case setAction.Set_Neighborhood:
            return {...state, neighborhood: action.payload};
        case setAction.Set_Street:
            return {...state, street: action.payload};
        case setAction.Set_Lane:
            return {...state, lane: action.payload};
        default:
            return state;
    }
}

function RegisterScreen() {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo: userInfoLogin} = userLogin;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (userInfoLogin) {
            navigate("/");
        }
    }, [userInfoLogin, navigate]);

    const [info, dispatchLocal] = useReducer(reducer, initRegisterInfo);

    const userRegister = useSelector((state) => state.userRegister);
    const {error, loading, userInfo} = userRegister;

    const submitRegisterHandle = (e) => {
        e.preventDefault();
        dispatch(register(info));
    }
    const {accountName, password, name, dateOfBirth, email, telephone, gender,
           occupation, nationality, city, district, neighborhood, street, lane} = info;

    return (
        <div className="CMregister">
            <div className="container">
                {loading && <CircularProgress color="success"/>}
                {error && <Alert variant="filled" severity="error">
                    {error}
                </Alert>}
                <header>Registration</header>
                <form onSubmit={submitRegisterHandle}>
                    <div className="form first">
                        <div className="details account">
                            <span className="title">Account Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Account Name</label>
                                    <input type="text" placeholder="Enter your account name" value={accountName} onChange={(e) => dispatchLocal({type: setAction.Set_AccountName, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => dispatchLocal({type:setAction.Set_Password, payload: e.target.value})} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form second">
                        <div className="details personal">
                            <span className="title">Personal Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Name</label>
                                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => dispatchLocal({type: setAction.Set_Name, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Date of Birth</label>
                                    <input type="date" placeholder="Enter birth date" value={dateOfBirth} onChange={(e) => dispatchLocal({type:setAction.Set_DateOfBirth, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter your email" value={email} onChange={(e) => dispatchLocal({type:setAction.Set_Email, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Telephone</label>
                                    <input type="text" placeholder="Enter telephone" value={telephone} onChange={(e) => dispatchLocal({type:setAction.Set_Telephone, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Gender</label>
                                    <select value={gender} onChange={(e) => dispatchLocal({type: setAction.Set_Gender, payload: e.target.value})} required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <label>Occupation</label>
                                    <input type="text" placeholder="Enter your occupation" value={occupation} onChange={(e) => dispatchLocal({type:setAction.Set_Occupation, payload: e.target.value})} required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form third">
                        <div className="details address">
                            <span className="title">Address Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Nationality</label>
                                    <input type="text" placeholder="Enter your nationality" value={nationality} onChange={(e) => dispatchLocal({type:setAction.Set_Nationality, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>City</label>
                                    <input type="text" placeholder="Enter your city" value={city} onChange={(e) => dispatchLocal({type:setAction.Set_City, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>District</label>
                                    <input type="text" placeholder="Enter your district" value={district} onChange={(e) => dispatchLocal({type:setAction.Set_District, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Neighborhood</label>
                                    <input type="text" placeholder="Enter your neighborhood" value={neighborhood} onChange={(e) => dispatchLocal({type:setAction.Set_Neighborhood, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Street</label>
                                    <input type="text" placeholder="Enter your street" value={street} onChange={(e) => dispatchLocal({type:setAction.Set_Street, payload: e.target.value})} required/>
                                </div>
                                <div className="input-field">
                                    <label>Lane</label>
                                    <input type="number" placeholder="Enter your lane" value={lane} onChange={(e) => dispatchLocal({type:setAction.Set_Lane, payload: e.target.value})} required/>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="submit">
                                    <span className="btnSubmit">Submit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default RegisterScreen;