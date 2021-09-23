export interface OrderPizzaRes {
    _id: string
    PizzaId: string | any
    CustomerId: string | any
    PizzaQuantity: number
    TotalBill: number
    createdAt?: string
    updatedAt?: string
}