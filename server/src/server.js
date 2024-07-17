import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
        console.log(`Server started at ${port}`);
    })
})