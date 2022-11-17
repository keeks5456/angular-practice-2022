import { EmployeeService } from './../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = []
  
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees().subscribe(data =>  this.employees = data)
  }


}
