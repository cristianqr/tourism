import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.html',
    imports: [TableModule, ButtonModule, RouterModule],
})
export class PeopleList {
    @Input() people: [] = [];
}