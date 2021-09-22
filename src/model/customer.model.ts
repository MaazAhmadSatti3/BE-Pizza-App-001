import { Schema, model } from "mongoose";
import { ICustomer } from "../types/document/ICustomer"

const ICustomerSchema = new Schema(
    {
        CustName: { type: String },
        CustAddress: { type: String }, 
        CustContactNo: { type: Number}
    },
    { timestamps: true }
)
export const CustomerSchema = model<ICustomer>('ICustomerSchema', ICustomerSchema)