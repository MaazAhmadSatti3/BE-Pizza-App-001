import { Document, Types } from "mongoose";

export interface IPizza extends Document {
    _id: string
    PizzaFlavour: string
    PizzaPriceEuro: number
    PizzaPriceDollar: number
    createdAt?: string
    updatedAt: string
}