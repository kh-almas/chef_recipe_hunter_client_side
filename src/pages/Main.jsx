import React from 'react';
import Header from "../component/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer.jsx";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;