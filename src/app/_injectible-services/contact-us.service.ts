import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactUsService {
    constructor(private httpClient: HttpClient) { }

    sendContactUs(data: any): Observable<any> {

        return this.httpClient.post(`${environment.backEndUrl}/contact-us`, data);
    }

    joinNewsletter(data: any): Observable<any> {

        return this.httpClient.post(`${environment.backEndUrl}/newsletter`, data);
    }
}