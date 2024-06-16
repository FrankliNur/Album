import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./dto_user/User";
import { LoginService } from "./login.service";

@Controller("login")
export class LoginController {
    constructor(private readonly LoginsService: LoginService) {}

    @Get()
    getLogins(): Promise<User[]> {
        return this.LoginsService.getLoginList();
    }
    @Get(":id")
    getLoginById(@Param("id") id: number): Promise<User | null> {
        return this.LoginsService.getLoginById(id);
    }

    @Post()
    insert(@Body() Login: User): Promise<User> {
        return this.LoginsService.insertLogin({
            id: 0,
            nombres: Login.nombres,
            correo: Login.correo,
            password: Login.password,
        });
    }
}
