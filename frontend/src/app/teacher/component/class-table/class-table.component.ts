import { Component } from '@angular/core';
import { Class, ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss'],
})
export class ClassTableComponent {
  classList: Class[] = [];

  constructor(private classService: ClassesService) {
    this.classList = classService.classes;

    // console.log(this.classList);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${day}-${month}-${year}`;
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
