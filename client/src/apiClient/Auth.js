import {QueryClient, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {paths} from "@/utils/helper.js";

const API_URL = import.meta.env.VITE_BACKEND

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    async function login(formData) {
        const response = await fetch(`${API_URL}/auth/signin`, {
            method: "POST",
            body: JSON.stringify(formData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json();
    }

    const {mutateAsync: userLogin, isPending: isLoading} = useMutation({
        mutationKey: ["userLogin"],
        mutationFn: (formData) => login(formData),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['fetchVerifyToken']})
            navigate(paths.home)
            toast.success("Successfully Logged in")
        }


    });

    return {userLogin, isLoading}
 }

export function useSignUp() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    async function login(formData) {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            body: JSON.stringify(formData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json();
    }

    const {mutateAsync: userSignUp, isPending: isLoading} = useMutation({
        mutationKey: ["userSignUp"],
        mutationFn: (formData) => login(formData),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['fetchVerifyToken']})
            navigate(paths.home)
            toast.success("Successfully Signed Up")
        }


    });

    return {userSignUp, isLoading}
}

export function useVerifyLogin(){
    async function VerifyLogin(){
        const response = await fetch(`${API_URL}/auth/verifyToken`,{
            credentials: "include"
        })

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json();
    }


    const {isSuccess, isLoading, data: userdata} = useQuery({
        queryKey:['fetchVerifyToken'],
        queryFn: () => VerifyLogin(),
        refetchOnWindowFocus: false,
        retry: 0,

    });

    return {isLoading, isSuccess, userdata}

}

export function useLogOut(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    async function logout(){
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: "POST",
            credentials: "include"
        });

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json();
    }

    const {mutateAsync: LogOut, isPending: isLoading} = useMutation({
        mutationKey: ["userOut"],
        mutationFn: logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['fetchVerifyToken']})
            navigate(paths.login)
            toast.success("Successfully Logged Out")
        }


    });

    return {LogOut, isLoading}
}
