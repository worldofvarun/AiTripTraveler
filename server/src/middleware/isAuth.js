import jwt from "jsonwebtoken";

export default function isAuth(req, res, next) {
    try {
        const token = req.cookies['auth_token'];
        if (!token) {
            return res.status(401).send({message:'Not authorized'});
        }

        const decode = jwt.decode(token);
        req.userId = decode.userId;
        next()
    }catch(e) {
        return res.status(401).send({message:'Not authorized'});
    }
}