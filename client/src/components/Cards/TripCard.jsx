import React from 'react';
import {useNavigate} from "react-router-dom";
import {paths} from "@/utils/helper.js";

const TripCard = ({ trip }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full overflow-hidden cursor-pointer" onClick={() => navigate(`${paths.trip}/${trip._id}`)}>
            <img src={trip.thumbnail} alt={trip.to} className="w-full h-64 object-cover rounded-md" />
            <div className={'flex flex-col'}>
                <span className="font-bold text-xl mt-2">Trip to {trip.to.split(',')[0]} from {trip.from.split(',')[0]}</span>
                <span className="text-base text-gray-500">{trip.duration} Days trip with {trip.budget} Budget</span>
            </div>
        </div>
    );
};

export default TripCard;