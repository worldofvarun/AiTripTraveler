import express from "express";
import isAuth from "../middleware/isAuth.js";
import {getMe} from "../controller/Auth.js";


const route = express.Router();

route.get('/me', isAuth, getMe)

export default route;

