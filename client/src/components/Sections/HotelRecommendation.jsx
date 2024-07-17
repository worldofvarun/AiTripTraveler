import React from 'react';
import HotelCard from "@/components/Cards/HotelCard.jsx";

function HotelRecommendation({hotels}) {
    return (
        <div className={'w-full'}>
            <span className={'text-xl font-bold'}>Hotel Recommendation</span>
            <div className={'grid md:grid-cols-3 gap-4 py-4'}>
                {hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </div>
        </div>
    );
}

export default HotelRecommendation;