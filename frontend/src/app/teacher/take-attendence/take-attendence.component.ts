import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  // Class,
  ConstantsService,
  Section,
} from 'src/app/services/constants.service';
import {
  AttendenceService,
  AttendenceList,
} from 'src/app/services/attendence.service';
import { AttendenceTableComponent } from '../component/attendence-table/attendence-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.scss'],
})
export class TakeAttendenceComponent {
  @ViewChild(AttendenceTableComponent)
  childComponent!: AttendenceTableComponent;

  sections!: Section[];
  attendenceArray: AttendenceList[] = [];
  selectedValue: any;
  classDetails: any;
  isFormEditable: boolean = false;
  // classList: Class[] = [];

  firstFormGroup = this._formBuilder.group({
    className: ['', Validators.required],
    section: ['', Validators.required],
    classDate: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private constantService: ConstantsService,
    private attendenceService: AttendenceService,
    private router: Router
  ) {
    // setting the view according to size
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    // setting the section from the services

    this.sections = constantService.sections;
  }

  ngOnInit() {
    // this.attendenceArray = this.attendenceService.attendenceArray;
    // console.log(this.attendenceArray)
  }

  classeNextButtonClicked() {
    this.classDetails = this.firstFormGroup.value;
  }
  attendenceNextButtonClicked() {
    this.selectedValue = this.childComponent.submit();

    console.log(this.selectedValue);
  }

  onAttendenceSubmit() {
    console.log(this.classDetails);
    console.log(this.selectedValue);
  }
}
