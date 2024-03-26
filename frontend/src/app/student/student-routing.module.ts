import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'attendance',component:AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
