import React from 'react';
import NavBar from "../../components/NavBar.jsx";
import {Outlet} from "react-router-dom";

function AppLayout() {

    return (
        <>
            <NavBar/>
            <div className={'container mx-auto p-4 h-screen '}>
                <Outlet/>
            </div>
        </>
    );
}

export default AppLayout;