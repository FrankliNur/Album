import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PersonasService } from "./personas.service";
import { Persona } from "./dto/Persona";
import { PersonasDto } from "./dto/PersonaDto";

@Controller("personas")
export class PersonasController {
    constructor(private readonly personasService: PersonasService) {}
    @Get("test")
    getTestPersonas(): string {
        return this.personasService.getTest();
    }

    @Get()
    getPersonas(): Promise<Persona[]> {
        return this.personasService.getPersonaList();
    }
    @Get(":id")
    getPersonaById(@Param("id") id: number): Promise<Persona | null> {
        return this.personasService.getPersonaById(id);
    }

    @Post()
    insert(@Body() persona: Persona): Promise<Persona> {
        return this.personasService.insertPersona({
            id: 0,
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            ciudad: persona.ciudad,
            edad: persona.edad,
            fechaNacimiento: persona.fechaNacimiento,
        });
    }
    /* @Put(":id")
    updatePut(@Param("id") id: number, @Body() persona: PersonasDto): Promise<Persona> {
        return this.personasService.updatePersona(id, {
            id,
        });
    } */
}
