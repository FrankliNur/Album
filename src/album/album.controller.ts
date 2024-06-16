import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Album } from "./dto_album/Album";
import { AlbumService } from "./album.service";

@Controller("album")
export class AlbumController {
    constructor(private readonly AlbumsService: AlbumService) {}

    @Get()
    getAlbums(): Promise<Album[]> {
        return this.AlbumsService.getAlbumList();
    }
    @Get(":id")
    getAlbumById(@Param("id") id: number): Promise<Album | null> {
        return this.AlbumsService.getAlbumById(id);
    }

    @Post()
    insert(@Body() Album: Album): Promise<Album> {
        return this.AlbumsService.insertAlbum({
            id: 0,
            nombres: Album.nombres,
            usuario: Album.usuario,
        });
    }
}
