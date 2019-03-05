import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private alert: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let error = err.error.message || err.statusText;
            console.log('Error code: ', err.status)
            
            if (err.status === 404) {
                this.alert.swalError(error)
            } else {
                this.alert.swalError('Ocorreu um erro inexperado, tente mais tarde!')
            }
            return throwError(error);
        }))
    }
}