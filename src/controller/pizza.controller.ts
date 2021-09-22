import { IPizza } from "../types/document/IPizza";
import { MainPizza } from "../repositories/pizza.repositories";
import CustomError from "../utils/error"
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveResPizza } from "../types/response/pizza.response";
import { SavePizzaReq } from "../types/request/pizza.request";

@Route('pizza')
@Tags('pizza')

export class PizzaController {
    constructor() {}

    @Post('/savepizza')
    async savePizza(@Body() pizza: SavePizzaReq): Promise<SaveResPizza> {
        const new_pizza: IPizza = await new MainPizza().savePizza(<IPizza>(pizza))
        return <SaveResPizza>(new_pizza)
    }

    @Post('/getpizzalist')
    async getPizzaList(): Promise<SaveResPizza[]> {
        const pizza: IPizza[] = await new MainPizza().getPizzaList()
        return <SaveResPizza[]>(pizza)
    }
}
