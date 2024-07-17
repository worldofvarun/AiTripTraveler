import React from 'react';
import {Badge} from "@/components/ui/badge.jsx";

function TripThumbnail({trip}) {
    return (
        <>
            <img src={trip.thumbnail} alt={trip.To} className="w-full h-96 object-cover rounded-md"/>
            <div>
                <span className={'font-bold text-2xl'}>Trip to {trip.To.split(',')[0]} from {trip.From.split(',')[0]}</span>
                <div className={'mt-2 flex gap-2 text-xl'}>
                    <Badge>📅 {trip.Duration.Days} Days</Badge>
                    <Badge>💰 {trip.Budget}</Badge>
                    <Badge>🥂 No of Travelers: {trip.Travelers}</Badge>
                </div>
            </div>
        </>
    );
}

export default TripThumbnail;