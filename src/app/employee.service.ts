import { IEmployee } from './employee';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import{ catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ //required for services and not componets
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees1.json"

  constructor( private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}