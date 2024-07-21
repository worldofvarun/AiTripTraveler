import React from 'react';
import CreateTripForm from "@/form/CreateTripForm.jsx";
import {useGenerateTrip} from "@/apiClient/Trips.js";
import Loading from "@/components/Loading.jsx";
import avatar from  '../../public/avatar.png'

function CreateTrip() {
    const {create_trip, isLoading} = useGenerateTrip();
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className={'grid grid-cols-2 gap-2'}>
            <div className={'mb-4'}>
                <h1 className={'font-semibold text-3xl'}>Tell us your travel preferences ✈️ 🧳</h1>
                <p className={'font-medium text-gray-500'}>Just provide some basic information and our trip planner  will generate a customized itinerary based on your preference.</p>
                <CreateTripForm onSubmit={create_trip} isLoading={isLoading}/>
            </div>
            <div className={'w-full h-full bg-blue-500 rounded-3xl flex flex-col items-center justify-center gap-2'}>
                <img className={'w-48 h-48 border-4 object-cover rounded-full'} src={avatar} alt={''}/>
                <h1 className={'text-2xl font-bold text-white'}>Ask Trip Trove</h1>
                <span className={'text-xl text-white'}>Don't search, just ask Layla. Your AI trip planner.</span>
            </div>

        </div>
    );
}

export default CreateTrip;