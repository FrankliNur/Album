import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "../../album/dto_album/Album";
import { Imagen } from "../../imagenes/dto_imagen/Imagen";

@Entity()
export class AlbumXImagen {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Album, Album => Album.id)
    album: Album;

    @ManyToOne(() => Imagen, imagen => imagen.id)
    imagen: Imagen;
}
