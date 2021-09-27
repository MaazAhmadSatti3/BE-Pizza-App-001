import express from 'express'
import { nextTick } from 'process'
import { OrderController } from '../controller/order.controller'
import { OrderReq } from '../types/request/order.request'
import { OrderPizzaRes } from '../types/response/order.response'
import CustomError from '../utils/error'
import { Response, Request, NextFunction } from 'express'
import { Body } from '@tsoa/runtime'
import { calcBillDollar, calcBillEuro } from '../middleware/calcBill'
import { tokenVerify } from '../middleware/authUser'
import { LoginController } from '../controller/login.controller'

export class OrderRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/saveorder', calcBillDollar, calcBillEuro, async (req, res, next) => {
            try {
                const order: any = req.body;
                order['TotalBillDollar'] = res.locals.total_price_dollar;
                order['TotalBillEuro'] = res.locals.total_price_euro;
                const newOrder: OrderPizzaRes = await new OrderController().saveorder(order);
                res.status(200).json({
                    message: newOrder,
                    BillDollar: res.locals.total_price_dollar,
                    BillEuro: res.locals.total_price_euro
                })
            } catch (error) {
                next(error)
            }
        });
        this.router.post('/getorderlist', tokenVerify, async (req, res, next) => {
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