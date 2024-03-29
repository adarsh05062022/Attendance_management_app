import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'students',component:StudentsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
