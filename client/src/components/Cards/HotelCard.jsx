import React from 'react';
import {paths} from "@/utils/helper.js";
import {Badge} from "@/components/ui/badge.jsx";

function HotelCard({hotel}) {
    return (
        <div className="w-full">
            <img src={hotel.HotelImage} alt={hotel.HotelName} className="w-full h-64 object-cover rounded-md"/>
            <div className={'flex flex-col gap-2 p-2'}>
                <span className="font-semibold text-xl mt-2">{hotel.HotelName}</span>
                <span className={'text-sm font-semibold'}>📍 {hotel.HotelAddress}</span>
                <span className={'text-sm font-semibold'}>💰 {hotel.HotelPrice}</span>
                <Badge className={'w-fit'}>⭐ {hotel.Rating}</Badge>
            </div>
        </div>
    );
}

export default HotelCard;