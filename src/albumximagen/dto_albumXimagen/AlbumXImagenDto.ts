import { IsNotEmpty, IsNumber } from "class-validator";

export class AlbumXImagenDto {
    @IsNumber()
    @IsNotEmpty()
    readonly idAlbum: number;
    @IsNumber()
    @IsNotEmpty()
    readonly idImagen: number;
}
