import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class GetData {
    // API endpoints:
    mainUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/db';
    usersUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users';
    companiesUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies';
    contactsUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts';
  
  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getAllData(): Observable<any> {
    return this.http.get<any>(this.mainUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUsersData(): Observable<any> {
    return this.http.get<any>(this.usersUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getContactsData(): Observable<any> {
    return this.http.get<any>(this.contactsUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCompaniesData(): Observable<any> {
    return this.http.get<any>(this.companiesUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}