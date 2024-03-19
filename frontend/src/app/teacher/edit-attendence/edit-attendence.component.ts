import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { AttendenceList, AttendenceService } from 'src/app/services/attendence.service';
import { Section,  ConstantsService } from 'src/app/services/constants.service';
import { AttendenceTableComponent } from '../component/attendence-table/attendence-table.component';

@Component({
  selector: 'app-edit-attendence',
  templateUrl: './edit-attendence.component.html',
  styleUrls: ['./edit-attendence.component.scss']
})
export class EditAttendenceComponent {

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
    private attendenceService: AttendenceService
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
    // this.selectedValue = this.childComponent.getSelectedRows();

    // console.log(this.selectedValue);
  }

  onAttendenceSubmit() {
    console.log(this.classDetails);
    console.log(this.selectedValue);
  }
}
