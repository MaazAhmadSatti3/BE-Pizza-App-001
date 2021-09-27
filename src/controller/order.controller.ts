import { IOrder } from "../types/document/IOrder";
import { MainOrder } from "../repositories/order.repositories";
import CustomError from "../utils/error"
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa"; 
import { OrderPizzaRes } from "../types/response/order.response";
import { OrderReq } from "../types/request/order.request";

@Route('order')
@Tags('order')

export class OrderController {
    constructor() {}

   @Post('/saveorder')
  async saveorder(@Body() order: OrderReq): Promise<OrderPizzaRes> {
    const new_order: IOrder = await new MainOrder().saveOrder(<IOrder>(order));
    return <OrderPizzaRes>(new_order);
  }

  @Security('api_key')
  @Post('/getorderlist')
  async getorderList(): Promise<OrderPizzaRes[]> {
    const order: IOrder[] = await new MainOrder().getOrderList();
    return <OrderPizzaRes[]>(order);
  }

}