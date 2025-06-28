import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PersonDto } from "@tourism/shared";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    private readonly http = inject(HttpClient);

    getAll(): Observable<PersonDto[]> {
        return this.http.get<PersonDto[]>('/api/people');
    }

    getOne(id: number): Observable<PersonDto> {
        return this.http.get<PersonDto>(`/api/people/${id}`);
    }

    save(person: PersonDto): Observable<PersonDto> {
        return this.http.post<PersonDto>('/api/people', person);
    }
}