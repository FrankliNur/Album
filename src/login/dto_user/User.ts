import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Imagen } from "../../imagenes/dto_imagen/Imagen";
import { Album } from "../../album/dto_album/Album";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    correo: string;

    @Column()
    password: string;

    @OneToMany(() => Imagen, imagen => imagen.usuario)
    imagenes?: Imagen[];

    @OneToMany(() => Album, album => album.usuario)
    albumes?: Album[];
}
