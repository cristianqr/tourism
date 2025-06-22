import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchForm } from '../../components/search-form/search-form';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PeopleService } from '../../services/peopleService';
import { PeopleList } from '../../components/people-list/people-list';

@Component({
    selector: 'app-people',
    imports: [CommonModule, SearchForm, ButtonModule, RouterModule, PeopleList],
    templateUrl: './people.html',
})
export class People {
    private readonly peopleService = inject(PeopleService);
    people: [] = [];
    ngOnInit() {
        this.search({});
    }

    search(event: object) {
        this.peopleService.getAll().subscribe((people) => {
            this.people = people;
        });
    }
}
