import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId},
    thumbnail: String,
    From: String,
    To: String,
    Duration: {
        Days: Number,
        Nights: Number
    },
    Travelers: Number,
    Budget: String,
    Transportation: [{
        Mode: String,
        Details: String,
        Price: String,
        BookingURL: String
    }],
    Accommodation: [{
        HotelName: String,
        HotelAddress: String,
        HotelImage: String,
        HotelPrice: String,
        GeoCoordinates: String,
        Rating: String,
        Description: String,
        PlacesToVisitNearby: [{
            PlaceName: String,
            PlaceDetails: String,
            GeoCoordinates: String,
            TicketPricing: String,
            TimeToTravel: String
        }]
    }],
    Itinerary: [{
        PlaceImage: String,
        Day: Number,
        Time: String,
        Activity: String,
        PlacesToVisit: String
    }],
    create_at: {type: Date, default: Date.now}
});

export const Trip = mongoose.model('Trip', Schema);

