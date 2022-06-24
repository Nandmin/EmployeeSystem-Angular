import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './model/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('tempButton') buttontemp: any;
  title = 'EmployeeSystem - Angular';

  // ha nem adja hozzá automatikusan, akkor az approuting-ben fel kell venni
  employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];
  
  eudcationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post graduate',
    'Phd'
  ];

  constructor(
    
    private fb: FormBuilder,
    private employeeService: EmployeeService
    ) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
      this.employeeForm = this.fb.group({
        firstName: this.fb.control(''),
        lastName: this.fb.control(''),
        birthday: this.fb.control(''),
        gender: this.fb.control(''),
        education: this.fb.control('default'),
        company: this.fb.control(''),
        jobExperience: this.fb.control(''),
        salary: this.fb.control(''),
      });
 
      this.employeeService.getEmployees().subscribe(res => {
        console.log(res);
      });
  }

  
  ngAfterViewInit(): void {
    // this.buttontemp.nativeelement.click()
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firsName') as FormControl;
  }
  
  public get LastName(): FormControl {
    return this.employeeForm.get('lastName') as FormControl;
  }

  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }

  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }

  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl;
  }

  public get Company(): FormControl {
    return this.employeeForm.get('company') as FormControl;
  }

  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }

  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }
}

