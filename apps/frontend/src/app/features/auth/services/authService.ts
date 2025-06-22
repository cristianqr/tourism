import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly http = inject(HttpClient);

    login(username: string, password: string) {
        console.log(username, password);
        return this.http.post<any>('/auth/login', { username, password });
    }
}