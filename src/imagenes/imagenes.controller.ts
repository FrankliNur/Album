import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Imagen } from "./dto_imagen/Imagen";
import { ImagenesService } from "./imagenes.service";
import { ImagenDto } from "./dto_imagen/ImagenDto";

@Controller("imagenes")
export class ImagenesController {
    constructor(private readonly imagensService: ImagenesService) {}
    @Get()
    getImagen(): Promise<Imagen[]> {
        return this.imagensService.getImagenList();
    }
    @Get(":id")
    getImagenById(@Param("id") id: number): Promise<Imagen | null> {
        return this.imagensService.getImagenById(id);
    }
    @Post()
    insert(@Body() imagen: ImagenDto): Promise<string> {
        // Return type changed to string
        const imageUrl = imagen.usuario; // Assuming 'usuario' field holds the URL
        return this.imagensService.insertImagen(imageUrl);
    }

    /*  @Post()
    insert(@Body() imagen: Imagen): Promise<Imagen> {
        return this.imagensService.insertImagen({
            id: 0,
            usuarios: imagen.usuarios,
            usuario: imagen.usuario,
        });
    } */
}
