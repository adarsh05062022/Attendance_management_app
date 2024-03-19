import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { TakeAttendenceComponent } from './take-attendence/take-attendence.component';
import { EditAttendenceComponent } from './edit-attendence/edit-attendence.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { AttendenceTableComponent } from './component/attendence-table/attendence-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClassTableComponent } from './component/class-table/class-table.component';


@NgModule({
  declarations: [
    HomeComponent,
    TakeAttendenceComponent,
    EditAttendenceComponent,
    AttendenceTableComponent,
    ClassTableComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [ ],
})
export class TeacherModule { }
