import React from 'react';
import {Link} from "react-router-dom";
import UserMenu from "@/components/UserMenu.jsx";

function NavBar() {
    return (
        <div className={"w-full p-6 border-b-2"}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <Link to='/' className={'text-3xl tracking-tight font-bold text-black'}>
                    Ai Trip Planner
                </Link>
                <div className={'hidden md:block'}>
                    <UserMenu/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;