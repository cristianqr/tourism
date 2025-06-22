import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonEntity } from "./person.entity";
import { PeopleRepository } from "./people.repository";
import { PeopleService } from "./people.service";
import { PeopleController } from "./people.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PersonEntity])],
    providers: [PeopleRepository, PeopleService],
    controllers: [PeopleController],
    exports: [PeopleService],
})
export class PeopleModule{}
