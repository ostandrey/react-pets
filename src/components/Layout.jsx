import React from 'react';
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom';

const queries = "(max-width: 1200px)";

const Layout = () => {
    const [tablet] = window.matchMedia(queries);

    if (tablet) {
        console.log(tablet)
        return ( 'hello'
            // <div className="wrapper">
            //     <Outlet />
            // </div>
        )
    }

    return (
        <div className="wrapper">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;