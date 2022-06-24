import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('tempButton') buttontemp: any;
  title = 'EmployeeSystem-Angular';

  // ha nem adja hozzá automatikusan, akkor az approuting-ben fel kell venni
  employeeForm: FormGroup;

  eudcationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post graduate',
    'Phd'
  ];

  constructor(private fb: FormBuilder) {
    this.employeeForm = fb.group({});
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
  }
  
  ngAfterViewInit(): void {
    // this.buttontemp.nativeelement.click()
  }
}

