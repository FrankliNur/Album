import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./dto_user/User";
import { Repository } from "typeorm";

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private LoginsRepository: Repository<User>,
    ) {}

    getTest(): string {
        return "Lista de Logins";
    }
    getLoginList(): Promise<User[]> {
        return this.LoginsRepository.find();
    }
    getLoginById(id: number): Promise<User | null> {
        return this.LoginsRepository.findOneBy({ id });
    }
    insertLogin(login: User): Promise<User> {
        return this.LoginsRepository.save(login);
    }
}
