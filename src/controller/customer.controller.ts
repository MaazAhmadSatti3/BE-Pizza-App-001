import { ICustomer } from "../types/document/ICustomer";
import { MainCustomer } from "../repositories/customer.respositories";
import CustomError from "../utils/error"
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveCustRes } from "../types/response/customer.response";
import { SaveCustReq } from "../types/request/customer.request";

@Route('customer')
@Tags('customer')

export class CustomerController {
    constructor() {}

    @Post('/saveCustomer')
    async saveCustomer(@Body() customer: SaveCustReq): Promise<SaveCustRes> {
        const new_customer: ICustomer = await new MainCustomer().saveCustomer(<ICustomer>(customer))
        return <SaveCustRes>(new_customer)
    }

    @Post('/getcustomerlist')
    async getCustomerList(): Promise<SaveCustRes[]> {
        const customer: ICustomer[] = await new MainCustomer().getCustomerList()
        return <SaveCustRes[]>(customer)
    }
}
