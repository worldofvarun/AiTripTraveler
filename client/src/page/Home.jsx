import React from 'react';
import {useGetAllTrips} from "@/apiClient/Trips.js";
import TripCard from "@/components/Cards/TripCard.jsx";
import {Button} from "@/components/ui/button.jsx";
import {paths} from "@/utils/helper.js";
import {useNavigate} from "react-router-dom";
import Loading from "@/components/Loading.jsx";

function Home() {
    const navigate = useNavigate();
    const {isLoading, data} = useGetAllTrips();

    if(isLoading){
        return <Loading/>
    }
    return (
        <>
        <div className={'flex justify-between items-center mb-4'}>
            <h1 className={'text-xl font-bold'}>My Trips</h1>
            <Button className={'bg-blue-500'} onClick={() => navigate(paths.create)}>Create Trip</Button>
        </div>

        <div className={'grid md:grid-cols-3 gap-4'}>

            {data.length > 0 ? data.map((trip, index) => (
                <TripCard key={index} trip={trip}/>
            )) : (<h1>No Trip Found</h1>)}

        </div>
        </>
)
    ;
}

export default Home;