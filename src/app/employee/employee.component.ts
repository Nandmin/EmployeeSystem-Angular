import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  // EventEmitter esetében stream helyett import angular corer kell
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();
  
  constructor() {
    this.employee = {
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: ''
    };
   }

  ngOnInit(): void {
    console.log(this.employee);
  }

  deleteEmployee() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployee() {
    this.onEditEmployee.emit(this.employee.id);
  }

}
