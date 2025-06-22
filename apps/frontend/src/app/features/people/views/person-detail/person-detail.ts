import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PeopleService } from '../../services/peopleService';

@Component({
    selector: 'app-person-detail',
    imports: [CommonModule, RouterModule, ButtonModule],
    templateUrl: './person-detail.html',
})
export class PersonDetail {
    private readonly peopleService = inject(PeopleService);
    private readonly route = inject(ActivatedRoute);
    person: any = {};

    ngOnInit() {
        this.peopleService.getOne(this.route.snapshot.params['id']).subscribe((person) => {
            this.person = person;
        });
    }
}
