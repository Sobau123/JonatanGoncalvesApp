import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from '../screens/HomeScreen';
import Login from '../screens/Login';
import Body from "../components/Body";
import SobreScreen from "../screens/SobreScreen";


function Rotas() {
    return (
        <Router>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route exact path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/sobre" Component={SobreScreen} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Rotas;