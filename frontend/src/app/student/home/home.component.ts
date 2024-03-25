import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todayAttendance: any; // Placeholder for today's attendance
  dateRangeAttendance: any[] = []; // Placeholder for attendance within a date range

  constructor(private classService: ClassesService) {}

  ngOnInit(): void {
    // Fetch today's attendance data
    this.fetchTodayAttendance();

    // Fetch attendance data within a date range
    this.fetchDateRangeAttendance();

    this.makeSearchRequest();
  }

  fetchTodayAttendance() {
    // Simulated API call to fetch today's attendance
    this.todayAttendance = {
      date: new Date().toLocaleDateString(),
      present: 15, // Number of students present today
      absent: 5, // Number of students absent today
    };
  }

  fetchDateRangeAttendance() {
    // Simulated API call to fetch attendance within a date range
    // Here, we are assuming attendance data for the last 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      this.dateRangeAttendance.push({
        date: date.toLocaleDateString(),
        present: Math.floor(Math.random() * 20) + 5, // Random number of students present
        absent: Math.floor(Math.random() * 10), // Random number of students absent
      });
    }
  }

  makeSearchRequest() {
    const date = new Date();

    

    let UserData = localStorage.getItem('USER_DATA');

    if (UserData) {
      let user = JSON.parse(UserData).user;

      let studentId = user._id;


      this.classService
        .getTodayClassByStudent(studentId, date)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
