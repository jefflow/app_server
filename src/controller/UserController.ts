import {JsonController, Get, Post, QueryParam, QueryParams} from "routing-controllers";

import userModel from "./../model/userModel";

@JsonController()
export class UserController {
  
    @Get("/users")
    getAllUsers(@QueryParams() query: userModel) {
       return {
          "username": "john"
         //  "password": "rey",
         //  "role": "Admin",
         //  "isActive": true
       }
    }

    @Post("/user")
    saveUser() {
       return {"success":1}
    }
}