import React from 'react';
import ActivityCard from "@/components/Cards/ActivityCard.jsx";

function ActivitySection({itinerary}) {
    return (
    <div className={'w-full mt-2'}>
        <span className={'text-xl font-bold'}>Activity</span>
        <div className={'grid md:grid-cols-3 gap-4 py-4'}>
            {itinerary.map((activity, index) => (
                <ActivityCard key={index} activity={activity}/>
            ))}
        </div>
    </div>
)
    ;
}

export default ActivitySection;