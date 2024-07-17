import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./page/Login.jsx";
import {paths} from "./utils/helper.js";
import ProtectionRoute from "./page/layout/protectionRoute.jsx";
import Signup from "./page/Signup.jsx";
import AppLayout from "./page/layout/AppLayout.jsx";
import Home from "@/page/Home.jsx";
import TripById from "@/page/TripById.jsx";
import CreateTrip from "@/page/CreateTrip.jsx";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectionRoute/>}>
                    <Route element={<AppLayout/>}>
                        <Route path={paths.home} element={<Home/>}/>
                        <Route path={paths.create} element={<CreateTrip/>}/>
                        <Route path={`${paths.trip}/:tripId`} element={<TripById/>}/>
                    </Route>
                </Route>
                <Route path={paths.login} element={<Login/>} />
                <Route path={paths.signup} element={<Signup/>}/>
                <Route path={'*'} element={<Navigate to={paths.home}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;