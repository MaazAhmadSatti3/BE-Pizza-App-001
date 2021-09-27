//import { Body, Request } from '@tsoa/runtime'
import  {Request, Response, NextFunction} from 'express'
import { MainPizza } from '../repositories/pizza.repositories'

const deliveryCostDollar = 10;
const deliveryCostEuro = 7;

export const calcBillDollar = async function (req: Request, res: Response, next: NextFunction) {
    const pizza_price_dollar: number = await new MainPizza().getPizzaPriceDollar(req.body.PizzaId);
    const total_price_dollar = req.body.PizzaQuantity * pizza_price_dollar + deliveryCostDollar;
    res.locals['total_price_dollar']= total_price_dollar;
    next();
} 

export const calcBillEuro = async function (req: Request, res: Response, next: NextFunction) {
    const pizza_price_euro: number = await new MainPizza().getPizzaPriceEuro(req.body.PizzaId);
    const total_price_euro = req.body.PizzaQuantity * pizza_price_euro + deliveryCostEuro;
    res.locals['total_price_euro']= total_price_euro;
    next();
} 