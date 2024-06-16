import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../login/dto_user/User";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombres: string;
    @Column()
    usuario: string;

    @ManyToOne(() => User, users => users.id) // Corregir aquí
    users?: User;
}
