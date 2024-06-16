import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonasController } from "./personas/personas.controller";
import { PersonasService } from "./personas/personas.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./personas/dto/Persona";
import { LoginController } from "./login/login.controller";
import { LoginService } from "./login/login.service";
import { User } from "./login/dto_user/User";
import { ImagenesController } from "./imagenes/imagenes.controller";
import { ImagenesService } from "./imagenes/imagenes.service";
import { Imagen } from "./imagenes/dto_imagen/Imagen";
import { AlbumController } from "./album/album.controller";
import { AlbumService } from "./album/album.service";
import { Album } from "./album/dto_album/Album";
import { AlbumXImagenController } from "./albumximagen/albumximagen.controller";
import { AlbumXImagenService } from "./albumximagen/albumximagen.service";
import { AlbumXImagen } from "./albumximagen/dto_albumXimagen/AlbumXimagen";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "album",
            entities: [Persona, User, Imagen, Album, AlbumXImagen],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Persona, User, Imagen, Album, AlbumXImagen]),
    ],
    controllers: [AppController, PersonasController, LoginController, ImagenesController, AlbumController, AlbumXImagenController],
    providers: [AppService, PersonasService, LoginService, ImagenesService, AlbumService, AlbumXImagenService],
})
export class AppModule {}
