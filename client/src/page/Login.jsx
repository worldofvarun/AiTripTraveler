import login_img from '../../public/log_1.png'
import LoginForm from "../form/Auth/Login.jsx";
import {useLogin} from "../apiClient/Auth.js";
function Login() {
    const {userLogin, isLoading} = useLogin();
    return (
        <div className={'w-full h-screen'}>
            <div className={'w-full h-full grid md:grid-cols-2 md:gap-4'}>
                <LoginForm userLogin={userLogin}/>
                <div className={'w-full h-screen'}>
                    <img src={login_img} className={'w-full h-full object-cover'} alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default Login;