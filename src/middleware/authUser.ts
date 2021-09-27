import { Request, Response, NextFunction } from "express";
import { IOrder } from "../types/document/IOrder";
import jwt from 'jsonwebtoken'
import CustomError from '../utils/error'

const conf = process.env

export const tokenVerify = async function (req: Request, res: Response, next: NextFunction) {
    
    let token = req.header('token')


    if (!token) {
        let err = new CustomError(403, "User token is required/login")
        console.log("Hi dsa")
        next(err);
    } else {
        try {
            console.log("else")
            const decoded = jwt.verify(token, <jwt.Secret>conf.TOKEN_KEY); 
            req.body = <IOrder> decoded
        } catch (err) {
            err = new CustomError(401, "Invalid token in header");
            next(err);
        }
    }
    next();
}