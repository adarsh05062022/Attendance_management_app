import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  AttendenceService,
  AttendenceList,
} from 'src/app/services/attendence.service';

@Component({
  selector: 'app-attendence-table',
  templateUrl: './attendence-table.component.html',
  styleUrls: ['./attendence-table.component.scss'],
})
export class AttendenceTableComponent {
  studentList: AttendenceList[] = [];
  allChecked:boolean = false

  constructor(private attendenceService: AttendenceService) {
    this.studentList = attendenceService.studentList;
    // console.log(this.studentList)
  }


  onAllSelectClicked(){
    
    if(!this.allChecked){
      this.studentList.map((value:AttendenceList)=> value.isPresent = true)
    }
    else{
      this.studentList.map((value:AttendenceList)=> value.isPresent = false)

    }
    this.allChecked = !this.allChecked

  }
  onCheckBoxClicked(student:AttendenceList){
    student.isPresent = !student.isPresent
  }

  submit(){
    return this.studentList;
    // console.log(this.studentList);    
  }
}
