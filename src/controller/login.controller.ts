import custom_Error from '../utils/error';
import { Route, Tags, Post, Body } from "tsoa";
import { LoginReq } from '../types/request/login.request';
import { LoginRes } from '../types/response/login.response';
import jwt, { Secret } from "jsonwebtoken";
import { MainOrder } from '../repositories/order.repositories';
require('dotenv').config();

@Route('/')
@Tags('Login')

export class LoginController {
    constructor() {}

    @Post('/login')
    async login(@Body() userChk: LoginReq): Promise<LoginRes> {

        const authuser = await new MainOrder().getOrderList()

        if(!authuser)
            throw new custom_Error(401, "User not authorized")
        return <LoginRes> {
            tokey_key: jwt.sign(JSON.stringify(userChk), <Secret>process.env.TOKEN_KEY),
            message: "Credentials Approved"
        }
    }
}