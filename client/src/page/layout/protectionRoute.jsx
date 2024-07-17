import {useAppContext} from "../../context-api/AppContext.jsx";
import {Navigate, Outlet} from "react-router-dom";
import {paths} from "../../utils/helper.js";

function ProtectionRoute() {
    const {isLoading, isAuth} = useAppContext()
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        isAuth ? <Outlet/> : <Navigate to={paths.login}/>
    );
}

export default ProtectionRoute;