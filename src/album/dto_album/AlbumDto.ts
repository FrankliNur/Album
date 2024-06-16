import { IsNotEmpty, IsString } from "class-validator";

export class AlbumDto {
    @IsString()
    @IsNotEmpty()
    readonly nombres: string;
    @IsString()
    @IsNotEmpty()
    readonly usuario: string;
}
