import express from 'express'
import { OrderController } from '../controller/order.controller'
import { OrderReq } from '../types/request/order.request'
import { OrderPizzaRes } from '../types/response/order.response'
import CustomError from '../utils/error'

export class OrderRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/saveorder', async (req, res, next) => {
            try {
                const order: OrderReq = req.body
                const newOrder: OrderPizzaRes = await new OrderController().saveorder(order)
                res.status(200).json({
                    message: newOrder
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