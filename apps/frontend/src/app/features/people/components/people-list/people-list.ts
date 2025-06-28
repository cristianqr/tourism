import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { PersonDto } from "@tourism/shared";

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.html',
    styles: [
        `
        :host {
            display: block;
        }
        `
    ],
    imports: [TableModule, ButtonModule, RouterModule],
})
export class PeopleList {
    @Input() people: PersonDto[] = [];
}