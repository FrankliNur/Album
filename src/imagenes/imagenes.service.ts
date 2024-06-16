import * as fs from "fs/promises"; // Import for file system operations
import { Injectable } from "@nestjs/common";
import { Imagen } from "./dto_imagen/Imagen";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ImagenesService {
    constructor(
        @InjectRepository(Imagen)
        private imagensRepository: Repository<Imagen>,
    ) {}

    getTest(): string {
        return "Lista de Imagens";
    }
    getImagenList(): Promise<Imagen[]> {
        return this.imagensRepository.find();
    }
    getImagenById(id: number): Promise<Imagen | null> {
        return this.imagensRepository.findOneBy({ id });
    }
    /* insertImagen(imagen: Imagen): Promise<Imagen> {
        return this.imagensRepository.save(imagen);
    } */
    async insertImagen(imageUrl: string, id: number = 0): Promise<string> {
        // Define path to local image folder (replace with your desired path)
        const imagePath = `./images/${id}.png`;

        try {
            // Download the image from the URL using fetch
            const response = await fetch(imageUrl);
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Save the buffer to the local image file
            await fs.writeFile(imagePath, buffer);
            return `Imagen guardada localmente en ${imagePath}`;
        } catch (error) {
            console.error(`Error al guardar la imagen: ${error}`);
            throw new Error("Error al guardar la imagen");
        }
    }
}
