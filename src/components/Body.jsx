import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Body(){
    return(
        <div className="App">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body;