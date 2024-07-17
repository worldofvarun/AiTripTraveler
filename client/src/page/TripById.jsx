import React from 'react';
import {useParams} from "react-router-dom";
import {useGetTripById} from "@/apiClient/Trips.js";
import TripThumbnail from "@/components/Sections/TripThumbnail.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import HotelRecommendation from "@/components/Sections/HotelRecommendation.jsx";
import TravelModes from "@/components/Sections/TravelModes.jsx";
import ActivitySection from "@/components/Sections/ActivitySection.jsx";

function TripById() {
    const {tripId} = useParams();
    const {trip, isLoading} = useGetTripById(tripId)

    if (isLoading){
        return
    }
    return (
        <div className={'flex flex-col items-start justify-between gap-4'}>
            <TripThumbnail trip={trip}/>
            <Separator/>
            <TravelModes transportation={trip.Transportation}/>
            <Separator/>
            <HotelRecommendation hotels={trip.Accommodation}/>
            <Separator/>
            <ActivitySection itinerary={trip.Itinerary}/>
        </div>
    );
}

export default TripById;