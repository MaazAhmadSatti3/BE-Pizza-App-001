import { CustomerSchema } from "../model/customer.model";
import { ICustomer } from "../types/document/ICustomer";

export class MainCustomer {
    constructor() {}

    saveCustomer(Customer: ICustomer) {
        return new CustomerSchema(Customer).save()
    }

    getCustomerList() {
        return CustomerSchema.find()
    }
}