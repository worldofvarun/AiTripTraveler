import React from 'react';
import {useParams} from "react-router-dom";
import {useGetTripById} from "@/apiClient/Trips.js";
import TripThumbnail from "@/components/Sections/TripThumbnail.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import HotelRecommendation from "@/components/Sections/HotelRecommendation.jsx";
import TravelModes from "@/components/Sections/TravelModes.jsx";
import ActivitySection from "@/components/Sections/ActivitySection.jsx";
import MapSection from "@/components/Sections/Map.jsx";




function TripById() {
    const {tripId} = useParams();
    const {trip, isLoading} = useGetTripById(tripId)


    if (isLoading){
        return
    }
    return (
        <div className={'flex flex-col items-start justify-between gap-4\''}>
            <div className={'grid md:grid-cols-2 gap-2'}>
                <div className={'flex flex-col items-start justify-between gap-4'}>
                    <TripThumbnail trip={trip}/>
                    <Separator/>
                    <TravelModes transportation={trip.transportation}/>
                </div>
                <div className={'h-[50vh] md:h-screen'}>
                    <MapSection  places={trip.dailyPlan} hotels={trip.hotels}/>
                </div>
            </div>
            <div className={'mt-4'}>
                <Separator/>
                <HotelRecommendation hotels={trip.hotels}/>
                <Separator/>
                <ActivitySection itinerary={trip.dailyPlan}/>
            </div>
        </div>
    );
}

export default TripById;