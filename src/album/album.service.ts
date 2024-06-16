import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "./dto_album/Album";
import { Repository } from "typeorm";

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album)
        private albumsRepository: Repository<Album>,
    ) {}

    getTest(): string {
        return "Lista de Albums";
    }
    getAlbumList(): Promise<Album[]> {
        return this.albumsRepository.find();
    }
    getAlbumById(id: number): Promise<Album | null> {
        return this.albumsRepository.findOneBy({ id });
    }
    insertAlbum(album: Album): Promise<Album> {
        return this.albumsRepository.save(album);
    }
}
