import express from "express";
import {getMe, LogOut, SignIn, SignUp, VerifyToken} from "../controller/Auth.js";
import isAuth from "../middleware/isAuth.js";

const route = express.Router()

route.post('/signup', SignUp);
route.post('/signin', SignIn);
route.get('/verifyToken', isAuth, VerifyToken);
route.post('/logout', isAuth, LogOut);


export default  route;
