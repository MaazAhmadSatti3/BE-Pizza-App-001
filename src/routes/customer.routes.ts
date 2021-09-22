import express from 'express'
import { CustomerController } from '../controller/customer.controller'
import { SaveCustReq } from '../types/request/customer.request'
import { SaveCustRes } from '../types/response/customer.response'
import CustomError from '../utils/error'

export class CustomerRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/saveCustomer', async (req, res, next) => {
            try {
                const cust: SaveCustReq = req.body
                const newCust: SaveCustRes = await new CustomerController().saveCustomer(cust)
                res.status(200).json({
                    message: newCust
                })
            } catch (error) {
                next(error)
            }
        });
        this.router.post('/getcustomerlist', async (req, res, next) => {
            try {
                const custList: SaveCustRes[] = await new CustomerController().getCustomerList()
                res.status(200).json({
                    result: custList
                })
            } catch (error) {
                next(error)
            }
        })
    }
}
export const CustomerRoutesApi = new CustomerRoutes().router