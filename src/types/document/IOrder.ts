import { Document, Types } from "mongoose";

export interface IOrder {
    _id: string
    PizzaId: string | any
    CustomerId: string | any
    PizzaQuantity: number
    createdAt?: string
    updatedAt?: string
}