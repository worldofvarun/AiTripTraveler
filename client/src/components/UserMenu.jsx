import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {CircleUserRound} from "lucide-react";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useAppContext} from "@/context-api/AppContext.jsx";
import {useLogOut} from "@/apiClient/Auth.js";

function UserMenu() {
    const {user} = useAppContext();
    const {LogOut} = useLogOut()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={'flex items-center px-3 font-bold hover:text-gray-500 gap-2'}>
                <CircleUserRound className={'text-gray-500'}/>
                {user.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Button className={'flex flex-1 font-bold bg-black'} onClick={LogOut}>
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserMenu;