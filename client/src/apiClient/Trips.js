import {useMutation, useQuery} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {paths} from "@/utils/helper.js";

const API_URL = import.meta.env.VITE_BACKEND

export function useGetAllTrips(){
    async function getAllTrips(){
        const response = await fetch( `${API_URL}/trip`,{
            credentials: "include"
        })

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json();
    }

    const {data, isLoading} = useQuery({
        queryKey: ['fetchAllTrips'],
        queryFn: getAllTrips,
        retry: 0,
        refetchOnWindowFocus: false
    });

    return {data, isLoading}
}

export function useGetTripById(tripId){
    async function getTripById(){
        const response = await fetch(`${API_URL}/trip/${tripId}`, {
            method: 'GET',
            credentials: 'include'
        })

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json()
    }

    const {data: trip, isLoading} = useQuery({
        queryKey: ['fetchTripById'],
        queryFn: () => getTripById(),
        enabled: !!tripId,
        refetchOnWindowFocus: false,
    })

    return {trip, isLoading}
}

export function useGenerateTrip(){
    const navigate = useNavigate()
    async function createTrip(formData){
        const response = await fetch(`${API_URL}/trip/create-trip`,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }

        return await response.json()
    }

    const {mutateAsync: create_trip, isPending: isLoading} = useMutation({
        mutationKey: ["createTrip"],
        mutationFn: (data) => createTrip(data),
        onSuccess: (data)=> {
            toast.success('Trip plan is created');
            navigate(`${paths.trip}/${data._id}`);

        }

    });

    return {create_trip, isLoading}
}
