import { Get, Route, Security, Response } from "tsoa";

@Route("secure")
export class SecureController {
  @Response<ErrorResponseModel>("Unexpected error")
  @Security("api_key")
  @Get("UserInfo")
  public async userInfo(@Request() request: any): Promise<UserResponseModel> {
    return Promise.resolve(request.user);
  }

  @Security("jwt", ["admin"])
  @Get("EditUser")
  public async userInfo(@Request() request: any): Promise<string> {
    // Do something here
  }
}