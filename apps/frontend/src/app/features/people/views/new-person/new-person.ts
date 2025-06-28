import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-new-person',
    imports: [CommonModule, RouterModule, ButtonModule, DialogModule],
    templateUrl: './new-person.html',
})
export class NewPerson { }
