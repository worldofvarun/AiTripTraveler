import React from 'react';
import {Badge} from "@/components/ui/badge.jsx";

function TripThumbnail({trip}) {
    return (
        <>
            <img src={trip.thumbnail} alt={trip.to} className="w-full h-96 object-cover rounded-md"/>
            <div>
                <span className={'font-bold text-2xl'}>Trip to {trip.to.split(',')[0]} from {trip.from.split(',')[0]}</span>
                <div className={'mt-2 flex gap-2 text-xl'}>
                    <Badge>📅 {trip.duration} Days</Badge>
                    <Badge>💰 {trip.budget}</Badge>
                    <Badge>🥂 No of Travelers: {trip.travelers}</Badge>
                </div>
            </div>
        </>
    );
}

export default TripThumbnail;