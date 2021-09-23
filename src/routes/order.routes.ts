import express from 'express'
import { nextTick } from 'process'
import { OrderController } from '../controller/order.controller'
import { OrderReq } from '../types/request/order.request'
import { OrderPizzaRes } from '../types/response/order.response'
import CustomError from '../utils/error'
import { Response, Request, NextFunction } from 'express'
import { Body } from '@tsoa/runtime'
import { calcBill } from '../../middleware/calcBill'

export class OrderRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/saveorder', calcBill, async (req, res, next) => {
            try {
                const order: any = req.body;
                order['TotalBill']= res.locals.total_price;
                const newOrder: OrderPizzaRes = await new OrderController().saveorder(order);
                res.status(200).json({
                    message: newOrder,
                    Bill: res.locals.total_price
                })
            } catch (error) {
                next(error)
            }
        });
        this.router.post('/getorderlist', async (req, res, next) => {
            try {
                const orderList: OrderPizzaRes[] = await new OrderController().getorderList()
                res.status(200).json({
                    result: orderList
                })
            } catch (error) {
                next(error)
            }
        })

        
    }
}
export const OrderRoutesApi = new OrderRoutes().router 