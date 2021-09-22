import { Schema, model } from "mongoose";
import { IPizza } from "../types/document/IPizza";

const IPizzaSchema = new Schema(
    {
        PizzaFlavour: { type: String }, 
        PizzaPriceEuro: { type: Number},
        PizzaPriceDollar: {type: Number}
    },
    { timestamps: true }
)
export const PizzaSchema = model<IPizza>('IPizzaSchema', IPizzaSchema)