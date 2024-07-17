import express from "express";
import {createTrip, deleteTripById, getMyTrips, getTripById} from "../controller/Trip.js";
import isAuth from "../middleware/isAuth.js";

const route = express.Router()

route.get('/', isAuth, getMyTrips);
route.post('/create-trip', isAuth, createTrip);
route.get('/:tripId', isAuth, getTripById);
route.delete('/:tripId', isAuth, deleteTripById);


export default route;