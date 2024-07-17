import {Trip} from "../model/Trip.js";
import {genarateTripPlan, searchImage} from "../utils/helper.js";


export async function createTrip(req, res) {
    try{
        let tripPlan = await genarateTripPlan(req.body);
        tripPlan = await tripPlan?.TravelPlan
        const accommodation = await Promise.all(tripPlan.Accommodation?.map(async (trip) => {
            return {HotelImage: await searchImage(trip.HotelName), ...trip}
        }));

        const Itinerary = await Promise.all(tripPlan.Itinerary?.map(async (itinerary) => {
            return {PlaceImage: await searchImage(`${itinerary.PlacesToVisit}`), ...itinerary}
        }))
        const newTrip = new Trip({
            thumbnail: await searchImage(`${req.body.to} city`),
            userId: req.userId,
            From: tripPlan.From,
            To: tripPlan.To,
            Duration: tripPlan.Duration,
            Travelers: tripPlan.Travelers,
            Budget: tripPlan.Budget,
            Transportation: tripPlan.Transportation,
            Accommodation: accommodation,
            Itinerary: Itinerary,
        });
        await newTrip.save();
        res.status(201).send(newTrip);

    }catch (e) {
        console.log(e);
        res.status(500).send({message: "Something went wrong!"})
    }

}

export async function getMyTrips(req, res){
    try{
        const trips = await Trip.find({userId: req.userId}).sort({create_at: -1});
        if (!trips) return res.status(404).send({message: "No trips found"});
        res.status(200).send(trips);
    }catch (e) {
        console.log(e);
        res.status(500).send({message: "Something went wrong!"})
    }
}

export async function getTripById(req, res){
    try{
        const {tripId} = req.params;
        const trip = await Trip.findById(tripId);
        if(!trip) return res.status(404).send({message: "No trip found"});

        res.status(200).send(trip);
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Something went wrong!"})
    }
}

export async function deleteTripById(req, res){
    try{
        const {tripId} = req.params;
        let trip = await Trip.findById(tripId);
        if(!trip) return res.status(404).send({message: "No trip data found"})
        trip = await Trip.findByIdAndDelete(tripId)
        res.status(202).send({message: "Successfully trip deleted"});
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Something went wrong!"})
    }
}


