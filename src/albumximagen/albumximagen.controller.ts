import { Controller, Get, Param } from "@nestjs/common";
import { AlbumXImagen } from "./dto_albumXimagen/AlbumXimagen";
import { AlbumXImagenService } from "./albumximagen.service";
// import { AlbumXImagenDto } from "./dto_albumXimagen/AlbumXimagenDto";

@Controller("albumximagen")
export class AlbumXImagenController {
    constructor(private readonly AlbumXImagensService: AlbumXImagenService) {}

    @Get()
    getAlbumXImagens(): Promise<AlbumXImagen[]> {
        return this.AlbumXImagensService.getAlbumXImagenList();
    }
    @Get(":id")
    getAlbumXImagenById(@Param("id") id: number): Promise<AlbumXImagen | null> {
        return this.AlbumXImagensService.getAlbumXImagenById(id);
    }
    /*
    @Post()
    insert(@Body() AlbumXImagen: AlbumXImagen): Promise<AlbumXImagen> {
        return this.AlbumXImagensService.create(AlbumXImagenDto);
    } */
}
