import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchForm } from '../../components/search-form/search-form';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PeopleService } from '../../services/peopleService';
import { PeopleList } from '../../components/people-list/people-list';
import { PersonDto } from '@tourism/shared';
import { DialogModule } from 'primeng/dialog';
import { NewPerson } from '../new-person/new-person';

@Component({
    selector: 'app-people',
    imports: [CommonModule, SearchForm, ButtonModule, RouterModule, PeopleList, DialogModule, NewPerson],
    templateUrl: './people.html',
})
export class People {
    private readonly peopleService = inject(PeopleService);
    people: PersonDto[] = [];
    displayModal = false;

    ngOnInit() {
        this.search({});
    }

    search(event: object) {
        this.peopleService.getAll().subscribe((people) => {
            this.people = people;
        });
    }

    showModal() {
        this.displayModal = true;
    }

    hideModal() {
        this.displayModal = false;
    }
}
