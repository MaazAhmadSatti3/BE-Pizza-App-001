import { PizzaSchema } from "../model/pizza.model";
import { IPizza } from "../types/document/IPizza";

export class MainPizza {
    constructor() {}

    savePizza(Pizza: IPizza) {
        return new PizzaSchema(Pizza).save()
    }

    getPizzaList() {
        return PizzaSchema.find()
    }

    async getPizzaPrice(id: string): Promise<number> {
        let pizzadoc = await PizzaSchema.findById(id)
        return <number>pizzadoc?.PizzaPriceDollar
    }
}