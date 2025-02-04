import { RequestHandler } from "express";

export const privateRequest: RequestHandler = (req, res, next) => {
    if(req.headers.authorization) {
        let authorizationToken = req.headers.authorization.split(" ")[1];

        if(authorizationToken === '1234') {
            return next();
        }
    }

    return res.status(401).json({error: 'Precisa de acesso.'});
}