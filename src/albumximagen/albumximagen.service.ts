import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AlbumXImagen } from "./dto_albumXimagen/AlbumXimagen";

@Injectable()
export class AlbumXImagenService {
    constructor(
        @InjectRepository(AlbumXImagen)
        private albumXimagensRepository: Repository<AlbumXImagen>,
    ) {}

    getTest(): string {
        return "Lista de AlbumXImagens";
    }
    getAlbumXImagenList(): Promise<AlbumXImagen[]> {
        return this.albumXimagensRepository.find();
    }
    getAlbumXImagenById(id: number): Promise<AlbumXImagen | null> {
        return this.albumXimagensRepository.findOneBy({ id });
    }
    insertAlbumXImagen(albumXimagen: AlbumXImagen): Promise<AlbumXImagen> {
        return this.albumXimagensRepository.save(albumXimagen);
    }
}
