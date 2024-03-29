import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/services/teacher.service';
interface Teacher {
  _id: string;
  name: string;
  email: string;
}
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent {
  teachers: Teacher[] = [];
  constructor(
    private teacherService: TeacherService,
    private toastr: ToastrService
  ) {
    teacherService.getTeachers().subscribe((response: any) => {
      if (response.success) {
        this.teachers = response.data;
      }
    });
  }

  deleteTeacher(teacherId: string) {
    this.teacherService.deleteTeacher(teacherId).subscribe((response: any) => {
      if (response.success) {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
  }
}
