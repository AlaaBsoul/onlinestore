import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "../componets/Home";
import Cart from "../componets/Cart";
import NavBar from "../componets/navbar";

const AppRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
