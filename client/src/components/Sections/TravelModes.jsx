import React from 'react';
import TravelCard from "@/components/Cards/TravelCard.jsx";

function TravelModes({transportation}) {
    return (
        <>
            <span className={'text-xl font-bold'}>Travel Mode</span>
            <div className={'w-full grid md:grid-cols-2 gap-4'}>

                {transportation.map((mode, index) => (
                    <TravelCard travel={mode} key={index}/>
                ))}
            </div>
        </>
    );
}

export default TravelModes;