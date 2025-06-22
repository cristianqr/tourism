import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-form',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './search-form.html',
})
export class SearchForm {
    private readonly fb = inject(FormBuilder);
    form: FormGroup;
    search = output<object>();

    constructor() {
        this.form = this.createForm();
    }

    private createForm() {
        return this.fb.group({
            fullName: ['', Validators.required],
        });
    }

    searchOn() {
        if (this.form.invalid) {
            return;
        }
        this.search.emit(this.form.value);
    }
}