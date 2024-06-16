import { IsNotEmpty, IsString } from "class-validator";

export class ImagenDto {
    @IsString()
    @IsNotEmpty()
    readonly usuario: string;
}
