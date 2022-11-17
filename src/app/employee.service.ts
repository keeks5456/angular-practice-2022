import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ //required for services and not componets
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor( private http: HttpClient) { }


  
// provide employee data
  getEmployees(): Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this._url);

  }
}
