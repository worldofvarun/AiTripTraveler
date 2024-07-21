import React from 'react';

function TravelCard({travel}) {
    return (
        <div className={'w-full border p-2 rounded-md shadow-sm'}>
            <span className={'text-2xl'}> {travel.Mode === "Bus" ? '🚌' : '✈️'}</span>
            <div className={'flex flex-col mt-2 gap-2'}>
                <span><b>Price:</b> {travel.price}</span>
                <span><b>Details:</b> {travel.details}</span>
                <span><b>Booking URL:</b> <a className={'text-blue-500 underline'} href={travel.bookingURL} target={'_blank'}>check it out</a></span>
            </div>
        </div>
    );
}

export default TravelCard;