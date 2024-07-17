import login_img from '../../public/log_1.png'
import {useLogin, useSignUp} from "../apiClient/Auth.js";
import SignUpForm from "../form/Auth/SignUp.jsx";
function SignUp() {
    const {userSignUp, isLoading} = useSignUp();
    return (
        <div className={'w-full h-screen'}>
            <div className={'w-full h-full grid md:grid-cols-2 md:gap-4'}>
                <SignUpForm userSignUp={userSignUp}/>
                <div className={'w-full h-screen'}>
                    <img src={login_img} className={'w-full h-full object-cover'} alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default SignUp;