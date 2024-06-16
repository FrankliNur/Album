import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../login/dto_user/User";

@Entity()
export class Imagen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @ManyToOne(() => User, usuario => usuario.id)
    usuarios?: User;
}
