import React from 'react';
import {Link} from "react-router-dom";
import UserMenu from "@/components/UserMenu.jsx";

function NavBar() {
    return (
        <div className={"w-full p-6 border-b-2 bg-blue-500 text-white"}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <Link to='/' className={'text-3xl tracking-tight font-bold text-white'}>
                    Trip Trove
                </Link>
                <div className={'hidden md:block'}>
                    <UserMenu/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;