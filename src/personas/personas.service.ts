import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Persona } from "./dto/Persona";

@Injectable()
export class PersonasService {
    constructor(
        @InjectRepository(Persona)
        private personasRepository: Repository<Persona>,
    ) {}

    getTest(): string {
        return "Lista de Personas";
    }
    getPersonaList(): Promise<Persona[]> {
        return this.personasRepository.find();
    }
    getPersonaById(id: number): Promise<Persona | null> {
        return this.personasRepository.findOneBy({ id });
    }
    insertPersona(persona: Persona): Promise<Persona> {
        return this.personasRepository.save(persona);
    }
}
