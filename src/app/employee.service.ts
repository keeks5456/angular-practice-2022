import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
// provide employee data
  getEmployees(){
    return [
      {"id":1, "name":"Jack", "age":25},
      {"id":2, "name":"Sue", "age":25},
      {"id":3, "name":"Fran", "age":25},
      {"id":4, "name":"Matt", "age":25}

    ]
  }
}
