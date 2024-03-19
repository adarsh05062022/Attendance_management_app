import { Injectable } from '@angular/core';

interface Section {
  value: string;
  viewValue: string;
}

// interface Class {
//   className: string;
//   forSection: string;
//   date: Date;
// }

@Injectable({
  providedIn: 'root',
})
class ConstantsService {
  sections: Section[] = [
    { value: '1CSA', viewValue: '1CSA' },
    { value: '1CSB', viewValue: '1CSB' },
    { value: '1CSC', viewValue: '1CSC' },
    { value: '2CSA', viewValue: '2CSA' },
    { value: '2CSB', viewValue: '2CSB' },
    { value: '2CSC', viewValue: '2CSC' },
    { value: '3CSA', viewValue: '3CSA' },
    { value: '3CSB', viewValue: '3CSB' },
    { value: '3CSC', viewValue: '3CSC' },
  ];

  // // Array of class objects
  // classes: Class[] = [
  //   {
  //     className: 'Mathematics',
  //     forSection: 'A',
  //     date: new Date(2024, 2, 18), // March 18, 2024
  //   },
  //   {
  //     className: 'Science',
  //     forSection: 'B',
  //     date: new Date(2024, 2, 19), // March 19, 2024
  //   },
  //   {
  //     className: 'English',
  //     forSection: 'C',
  //     date: new Date(2024, 2, 20), // March 20, 2024
  //   },
  //   {
  //     className: 'History',
  //     forSection: 'D',
  //     date: new Date(2024, 2, 21), // March 21, 2024
  //   },
  //   {
  //     className: 'Computer Science',
  //     forSection: 'E',
  //     date: new Date(2024, 2, 22), // March 22, 2024
  //   },
  // ];

  constructor() {}
}

export { ConstantsService, Section };
