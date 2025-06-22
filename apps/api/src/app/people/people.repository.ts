import { plainToInstance } from "class-transformer";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PersonEntity } from "./person.entity";
import { PersonDto } from "./person.dto";


@Injectable()
export class PeopleRepository {
    constructor(@InjectRepository(PersonEntity) private readonly personRepository: Repository<PersonEntity>) {}

    async findAll(): Promise<PersonDto[]> {
        return this.personRepository.find().then(people => people.map(person => plainToInstance(PersonDto, person)));
    }

    async findOne(id: number): Promise<PersonDto | null> {
        return this.personRepository.findOneBy({ id }).then(person => plainToInstance(PersonDto, person));
    }
}
