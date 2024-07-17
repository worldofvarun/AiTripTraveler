import React from 'react';
import NavBar from "../../components/NavBar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {paths} from "@/utils/helper.js";

function AppLayout() {

    return (
        <>
            <NavBar/>
            <div className={'container mx-auto p-4 h-screen'}>
                <Outlet/>
            </div>
        </>
    );
}

export default AppLayout;