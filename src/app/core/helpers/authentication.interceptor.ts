import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'x-api-key': 'zAuGBFw9QX1mTCrIjPMXpaG0PgziOEEt2uYEGwt4',
                'x-api-secret': 'r:e86306413b50cbc682d784cfd3a2f20f'
            }
        });
        return next.handle(request);
    }
}