import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-new-person',
    imports: [CommonModule, RouterModule, ButtonModule],
    templateUrl: './new-person.html',
})
export class NewPerson { }
