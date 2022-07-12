import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import "./App.css"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ProductScreen from "./screens/ProductsScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="homescreen">
                <Sidebar/>
                <div className="home-container">
                    <Topbar/>
                    <Routes>
                        <Route path="/" element={<DashboardScreen/>}></Route>
                        <Route path="/products" element={<ProductScreen/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
