import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {paths} from "../../utils/helper.js";

function SignUpForm({userSignUp}) {
    const {handleSubmit, register} = useForm()

    function onSubmit(formState) {
        userSignUp(formState);
    }
    return (
        <div className={'w-full h-screen flex flex-col items-center justify-center p-4 '}>

            <form className={'flex flex-col gap-2 min-w-[380px] max-w-[420px]'}
                  onSubmit={handleSubmit((formData) => onSubmit(formData))}>

                <span className={'text-2xl font-semibold'}>Welcome Back to Ai Trip Planner</span>
                <span className={'text-sm font-light text-gray-500'}>Do you have account <Link
                    className={'text-blue-500'} to={paths.login}>Login</Link>?</span>
                <label htmlFor={'full_name'}>Full Name</label>
                <input name={'full_name'}
                       type={'text'}
                       placeholder={'Harshu Muppa'}
                       className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                       {...register('full_name', {required: true})}
                />
                <label htmlFor={'email'}>Email</label>
                <input name={'email'}
                       type={'email'}
                       placeholder={'sameer@ai.com'}
                       className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                       {...register('email', {required: true})}
                />
                <label htmlFor={'password'}>Password</label>
                <input name={'password'}
                       type={'password'}
                       placeholder={'password'}
                       className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                       {...register('password', {required: true})}
                />
                <button type={'submit'} className={'w-full bg-black mt-4 px-4 py-2 rounded text-white'}>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;