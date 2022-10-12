import React from 'react';
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom';
import AppBar from "./AppBar/AppBar";

const Layout = () => {
    return (
        <div className="wrapper">
            <AppBar />
            <Outlet />
        </div>
    );
};

export default Layout;