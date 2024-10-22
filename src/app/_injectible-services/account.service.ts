import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        const input = new FormData();
        input.append('username', username);
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('accept', 'application/json');

        const body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        return this.httpClient.post(`${environment.testingBackendUrl}/api/customer/login`, body.toString(), { headers })
    }

    signup(body: any) {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
        });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/customer/signup`, body, { headers })
    }

    getCustomer(username: string) {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
        });
        return this.httpClient.get(`${environment.testingBackendUrl}/api/customer/customers/${username}`, { headers })
    }

}