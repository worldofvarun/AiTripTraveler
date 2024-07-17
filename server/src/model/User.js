import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = new mongoose.Schema({
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
})


Schema.pre('save', async function (next) {
    if(!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, Number(process.env.SALT))

})
export const User = mongoose.model('User', Schema);
