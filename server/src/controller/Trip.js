
import {genarateTripPlan, searchImage} from "../utils/helper.js";
import {Trip} from "../model/Trip.js";


export async function createTrip(req, res) {
    try{
        let tripPlan = await genarateTripPlan(req.body);
        tripPlan = await tripPlan.travelPlan;
        const hotels = await Promise.all(tripPlan.hotels?.map(async (trip) => {
            return {hotelImage: await searchImage(trip.name), ...trip}
        }));

        const dailyPlan = await Promise.all(tripPlan.dailyPlan?.map(async (itinerary) => {
            return {PlaceImage: await searchImage(`${itinerary.location}`), ...itinerary}
        }))
        const newTrip = new Trip({
            thumbnail: await searchImage(`${req.body.to} city`),
            userId: req.userId,
            from: tripPlan.from,
            to: tripPlan.to,
            duration: tripPlan.duration,
            travelers: tripPlan.travelers,
            budget: tripPlan.budget,
            transportation: tripPlan.transportation,
            hotels: hotels,
            dailyPlan: dailyPlan,
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
        await Trip.findByIdAndDelete(tripId)
        res.status(202).send({message: "Successfully trip deleted"});
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Something went wrong!"})
    }
}


