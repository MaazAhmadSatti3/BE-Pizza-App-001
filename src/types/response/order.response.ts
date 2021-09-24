export interface OrderPizzaRes {
    _id: string
    PizzaId: string | any
    CustomerId: string | any
    PizzaQuantity: number
    TotalBillDollar: number
    TotalBillEuro: number
    createdAt?: string
    updatedAt?: string
}