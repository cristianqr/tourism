import { Controller, Get, Param } from "@nestjs/common";
import { PeopleService } from "./people.service";

@Controller('people')
export class PeopleController {
    constructor(private readonly peopleService: PeopleService) {}

    @Get()
    async findAll() {
        return this.peopleService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.peopleService.findOne(id);
    }
}