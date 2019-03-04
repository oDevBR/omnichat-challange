import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../../shared/models';
import { WEB_API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get(`${WEB_API}/customers`)
      .pipe(map(res => res as Customer[]))
  }

  getById(objectId: any): Observable<Customer> {
    return this.http.get(`${WEB_API}/customers`, {
      params: new HttpParams().set('objectId', objectId)
    })
      .pipe(map(res => res as Customer))
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post(`${WEB_API}/customers`, customer)
      .pipe(map(res => res as Customer))
  }

  update(objectId: any): Observable<Customer> {
    return this.http.put(`${WEB_API}/customers`, {
      params: new HttpParams().set('objectId', objectId)
    })
      .pipe(map(res => res as Customer))
  }

  delete(objectId: any): Observable<any> {
    return this.http.put(`${WEB_API}/customers`, {
      params: new HttpParams().set('objectId', objectId)
    })
      .pipe(map(res => res as Customer))
  }

  private handleError(error: any): Observable<any> {
    console.log('Erro na requisicao -> ', error)
    return throwError(error)
  }
}