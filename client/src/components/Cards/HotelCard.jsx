import React from 'react';
import {Badge} from "@/components/ui/badge.jsx";

function HotelCard({hotel}) {
    return (
        <div className="w-full">
            <img src={hotel.hotelImage} alt={hotel.name} className="w-full h-64 object-cover rounded-md"/>
            <div className={'flex flex-col gap-2 p-2'}>
                <span className="font-semibold text-xl mt-2">{hotel.name}</span>
                <span className={'text-sm font-semibold'}>📍 {hotel.address}</span>
                <span className={'text-sm font-semibold'}>💰 {hotel.price}</span>
                <Badge className={'w-fit'}>⭐ {hotel.rating}</Badge>
            </div>
        </div>
    );
}

export default HotelCard;