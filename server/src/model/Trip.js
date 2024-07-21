import mongoose,{Schema} from 'mongoose'

const TransportationSchema = new Schema({
    mode: String,
    details: String,
    price: String,
    bookingURL: String
});

const PlaceNearbySchema = new Schema({
    name: String,
    details: String,
    geoCoordinates: String,
    ticketPricing: String,
    coordinateTime: String
});

const HotelSchema = new Schema({
    hotelImage: String,
    name: String,
    address: String,
    price: String,
    geoCoordinates: String,
    rating: String,
    description: String,
    placesNearby: [PlaceNearbySchema]
});

const DailyPlanSchema = new Schema({
    PlaceImage: String,
    day: Number,
    time: String,
    location: String,
    details: String,
    geoCoordinates: String
});

const TripSchema = new Schema({
    thumbnail: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    from: String,
    to: String,
    duration: Number,
    travelers: Number,
    budget: String,
    transportation: [TransportationSchema],
    hotels: [HotelSchema],
    dailyPlan: [DailyPlanSchema]
});

export const Trip = mongoose.model('Trip', TripSchema);

