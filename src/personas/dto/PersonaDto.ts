import { IsDateString, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class PersonasDto {
    @IsString()
    @IsNotEmpty()
    readonly nombres: string;
    @IsString()
    @IsNotEmpty()
    readonly apellidos: string;
    @IsString()
    @IsNotEmpty()
    readonly ciudad: string;
    @IsString()
    @IsPositive()
    readonly edad: number;
    @IsDateString()
    @IsNotEmpty()
    readonly fechaNacimiento: Date;
}
