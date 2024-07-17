import {createContext, useContext} from 'react';
import {useVerifyLogin} from "../apiClient/Auth.js";
import {ToastContainer} from "react-toastify";

const AppContext = createContext();

function AppProvider({ children }) {
    const {isSuccess, isLoading, userdata} = useVerifyLogin();
    return (
        <AppContext.Provider value={{isAuth: isSuccess, isLoading: isLoading, user: userdata}}>
            <ToastContainer/>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){
    return useContext(AppContext);
}

export default AppProvider;