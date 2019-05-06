import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  employees : Employee[] = [
    {
      employeeID : 1,
      name : "John",
      designation : "Software Engineer",
      salary: 20000
    },
    {
      employeeID : 2,
      name : "Doe",
      designation : "Software Engineer",
      salary: 19000
    },
    {
      employeeID : 3,
      name : "Steve",
      designation : "Software Engineer",
      salary: 55220
    },
    {
      employeeID : 4,
      name : "Kane",
      designation : "Software Engineer",
      salary: 60000
    }
  ];
}