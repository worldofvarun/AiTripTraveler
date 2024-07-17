import {User} from "../model/User.js";
import {genarateJWT} from "../utils/helper.js";
import bcrypt from "bcryptjs";

export async function SignUp(req, res) {
    try{
        const {full_name, email, password} = req.body;
        let isUser = await User.findOne({email: email});

        if(isUser){
            return res.status(400).send({message: 'Email already exists'});
        }

        isUser = new User({full_name: full_name, email: email, password: password});
        await isUser.save();
        const token = await genarateJWT({userId: isUser._id});
        res.cookie('auth_token', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        })
        res.status(201).send(isUser);
    }catch (e) {
        console.log(e);
        res.status(500).send({message: 'Something went wrong!'});
    }
}

export  async function SignIn(req, res) {
    try{
        const {email, password} = req.body;
        const isUser = await User.findOne({email: email}).select('+password');
        if(!isUser){
            return res.status(400).send({message: 'Email already exists'});
        }
        const isMatch = bcrypt.compare(password, isUser.password);
        if(!isMatch){
            return res.status(401).send({message: 'passwords do not match'});
        }

        const token = await genarateJWT({userId: isUser._id})
        res.cookie('auth_token', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        })
        return res.status(200).send({});

    }catch (e) {
        console.log(e)
        res.status(500).send({message: 'Something went wrong!'})
    }
}

export async function VerifyToken(req, res) {
    try{
        const user = await User.findById(req.userId);
        res.status(200).send(user)
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Something went wrong!"})
    }
}

export async function LogOut(req, res) {
    try{
        res.clearCookie('auth_token');
        res.status(200).send({message: "Successfully Logged Out"});
    }catch (e) {
        console.log(e)
        res.status(500).send({message: 'Something went wrong!'})
    }
}

export async function getMe(req, res){
    try{
        const user = await User.findById(req.userId);
        if(!user) return res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Something went wrong!"})
    }
}