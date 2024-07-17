import React from 'react';
import CreateTripForm from "@/form/CreateTripForm.jsx";
import {useGenerateTrip} from "@/apiClient/Trips.js";
import AutoComplete from "react-google-autocomplete";
import Loading from "@/components/Loading.jsx";

function CreateTrip() {
    const {create_trip, isLoading} = useGenerateTrip();
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className={'mb-4'}>
                <h1 className={'font-semibold text-3xl'}>Tell us your travel preferences ✈️ 🧳</h1>
                <p className={'font-medium text-gray-500'}>Just provide some basic information and our trip planner  will generate a customized itinerary based on your preference.</p>

            </div>
            <CreateTripForm onSubmit={create_trip} isLoading={isLoading}/>
        </div>
    );
}

export default CreateTrip;