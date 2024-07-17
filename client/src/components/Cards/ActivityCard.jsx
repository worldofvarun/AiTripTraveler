import React from 'react';

function ActivityCard({activity}) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img
                className="w-full h-80 object-cover rounded-lg mr-4"
                src={activity.PlaceImage}
                alt={activity.PlacesToVisit}
            />
            <h2 className="text-lg font-bold mb-2">Day {activity.Day} - {activity.Time}</h2>
            <p className="text-gray-600 mb-4">{activity.Activity}</p>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-semibold text-gray-700">Places to Visit</h3>
                    <p className="text-gray-500">{activity.PlacesToVisit}</p>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;