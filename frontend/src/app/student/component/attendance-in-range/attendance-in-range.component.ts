import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendance-in-range',
  templateUrl: './attendance-in-range.component.html',
  styleUrls: ['./attendance-in-range.component.scss'],
})
export class AttendanceInRangeComponent {
  attendenceList!: any;
  formGroup!: FormGroup;

  startDate!: Date;
  endDate!: Date;

  constructor(
    private attendanceService: AttendanceService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group(
      {
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      },
      { validators: this.dateRangeValidator }
    );
  }

  submit() {
    console.log(this.startDate);
    console.log(this.startDate);

    const startdate = new Date(this.startDate);
    const enddate = new Date(this.endDate);

    let start = `${startdate.getDate()}-${
      startdate.getMonth() + 1
    }-${startdate.getFullYear()}`;
    let end = `${enddate.getDate()}-${
      enddate.getMonth() + 1
    }-${enddate.getFullYear()}`;

    this.makeRequest(start, end);
  }

  dateRangeValidator(formGroup: FormGroup) {
    const startDate = formGroup.get('startDate')?.value;
    const endDate = formGroup.get('endDate')?.value;

    if (startDate && endDate) {
      if (startDate > endDate) {
        return { dateRangeInvalid: true };
      }

      if (endDate > new Date()) {
        formGroup.get('endDate')?.setErrors({ futureDate: true });
        return { dateRangeInvalid: true };
      }
    }

    return null;
  }

  makeRequest(start: string, end: string) {
    const userInfo = localStorage.getItem('USER_DATA');
    if (userInfo) {
      let studentId = JSON.parse(userInfo).user._id;

      const startDateParts = start.split('-').reverse().join('-');
      const endDateParts = end.split('-').reverse().join('-');
      const startDate = new Date(startDateParts);
      const endDate = new Date(endDateParts);

      this.attendanceService
        .getStudentDateRangeAttendance(studentId, startDate, endDate)
        .subscribe((response) => {
          if (response.success) {
            this.attendenceList = response.data;
          }
          console.log(response);
        });
    }
  }

  get totalClasses() {
    if (this.attendenceList) {
      return this.attendenceList.length;
    }

    return 0;
  }

  get present() {
    if (this.attendenceList) {
      return this.attendenceList.filter(
        (value: any) =>
          value.attendanceRecords[0].attendanceStatus === 'present'
      ).length;
    }

    return 0;
  }
}
