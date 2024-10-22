// cache-control.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheControlInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and add the Cache-Control header
    const modifiedRequest = request.clone({
      headers: new HttpHeaders({
        'Cache-Control': 'public, max-age=86400' // Adjust this value as needed
      })
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
