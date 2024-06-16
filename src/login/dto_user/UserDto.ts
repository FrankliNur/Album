import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    readonly nombres: string;
    @IsString()
    @IsNotEmpty()
    readonly correo: string;
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}
