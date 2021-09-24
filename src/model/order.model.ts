import { Schema, model } from "mongoose";
import { IOrder } from "../types/document/IOrder";

const IOrderSchema = new Schema(
    {
        PizzaId: { type: Schema.Types.ObjectId, ref: "IPizzaSchema" },
        CustomerId: { type: Schema.Types.ObjectId, ref: "ICustomerSchema" },
        PizzaQuantity: { type: Number },
        TotalBillDollar: { type: Number },
        TotalBillEuro: { type: Number }
    },
    { timestamps: true }
)
export const OrderSchema = model<IOrder>('IOrderSchema', IOrderSchema)