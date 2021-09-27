import { OrderSchema } from "../model/order.model";
import { IOrder } from "../types/document/IOrder";

export class MainOrder {
    constructor() {}

    saveOrder(ORDer: IOrder) {
        return new OrderSchema(ORDer).save()
    }

    getOrderList() {
        return OrderSchema.find()
    }

    getOrderId(_id: string) {
        return OrderSchema.findById(_id)
    }

}