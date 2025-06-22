import { Injectable } from "@nestjs/common";
import { PeopleRepository } from "./people.repository";
import { PersonDto } from "./person.dto";

@Injectable()
export class PeopleService {
    constructor(private readonly peopleRepository: PeopleRepository) {}

    async findAll(): Promise<PersonDto[]> {
        return this.peopleRepository.findAll();
    }
    async findOne(id: number): Promise<PersonDto | null> {
        return this.peopleRepository.findOne(id);
    }
}