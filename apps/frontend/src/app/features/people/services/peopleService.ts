import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    private readonly http = inject(HttpClient);

    getAll() {
        return this.http.get<any>('/api/people');
    }

    getOne(id: number) {
        return this.http.get<any>(`/api/people/${id}`);
    }
}