//import { Body, Request } from '@tsoa/runtime'
import  {Request, Response, NextFunction} from 'express'
import { MainPizza } from '../src/repositories/pizza.repositories'


export const calcBill = async function (req: Request, res: Response, next: NextFunction) {
    const pizza_price: number = await new MainPizza().getPizzaPrice(req.body.PizzaId);
    const total_price= req.body.PizzaQuantity * pizza_price;
    res.locals['total_price']= total_price;
    next();
} 