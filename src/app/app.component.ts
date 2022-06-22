import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'EmployeeSystem-Angular';
  @ViewChild('tempButton') buttontemp: any;

  eudcationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post graduate',
    'Phd'
  ];
  
  ngAfterViewInit(): void {
    this.buttontemp.nativeelement.click()
  }
}

