import { Document } from "mongoose";

export interface ICustomer extends Document {
    _id: string
    CustName: string 
    CustAddress: string
    CustContactNo: string
    createdAt?: string
    updatedAt: string
}