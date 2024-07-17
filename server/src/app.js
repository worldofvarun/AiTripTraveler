import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import xss from "xss-clean";
import mongoSanitize from 'express-mongo-sanitize';
import morgan from "morgan";
import dotenv from "dotenv";
import Auth from "./routes/Auth.js";
import Trip from "./routes/Trip.js";
import Profile from "./routes/Profile.js";

dotenv.config()
const app = express();

app.use(morgan("dev"));
// basics
app.use(cors({
    origin: process.env.CLIENT,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// security
app.use(xss());
app.use(mongoSanitize());



app.all('/health', (req, res) => {
    res.status(200).send('OK!')
})

app.use('/api/auth', Auth)
app.use('/api/profile', Profile)
app.use('/api/trip', Trip)


export default app;