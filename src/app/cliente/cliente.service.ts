import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiURL = 'https://clientes-restapi-ricardovp.up.railway.app';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.httpClient
      .get<Cliente[]>(this.apiURL + '/clientes/')
      .pipe(catchError(this.errorHandler));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .post<Cliente>(
        this.apiURL + '/clientes/',
        JSON.stringify(cliente),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id: string): Observable<Cliente> {
    return this.httpClient
      .get<Cliente>(this.apiURL + '/clientes/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: string, cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .put<Cliente>(
        this.apiURL + '/clientes/' + id,
        JSON.stringify(cliente),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: string) {
    return this.httpClient
      .delete<Cliente>(this.apiURL + '/clientes/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error}`;
    }
    return throwError(errorMessage);
  }
}
