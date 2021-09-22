import express from 'express'
import { PizzaController } from '../controller/pizza.controller'
import { SavePizzaReq } from '../types/request/pizza.request'
import { SaveResPizza } from '../types/response/pizza.response'
import CustomError from '../utils/error'

export class PizzaRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/savepizza', async (req, res, next) => {
            try {
                const pizza: SavePizzaReq = req.body
                const newPizza: SaveResPizza = await new PizzaController().savePizza(pizza)
                res.status(200).json({
                    message: newPizza
                })
            } catch (error) {
                next(error)
            }
        });
        this.router.post('/getpizzalist', async (req, res, next) => {
            try {
                const pizzaList: SaveResPizza[] = await new PizzaController().getPizzaList()
                res.status(200).json({
                    result: pizzaList
                })
            } catch (error) {
                next(error)
            }
        })
    }
}
export const PizzaRoutesApi = new PizzaRoutes().router