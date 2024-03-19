import { Injectable } from '@angular/core';

interface Class {
  className: string;
  section: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
class ClassesService {
  // Create an array of objects with 5 entries
  classes: Class[] = [
    {
      className: 'Mathematics',
      section: '3CSA',
      date: new Date('2024-03-18'),
    },
    {
      className: 'Science',
      section: '3CSA',
      date: new Date('2024-03-19'),
    },
    {
      className: 'English',
      section: '3CSA',
      date: new Date('2024-03-20'),
    },
    {
      className: 'History',
      section: '3CSA',
      date: new Date('2024-03-21'),
    },
    {
      className: 'Computer Science',
      section: '3CSA  ',
      date: new Date('2024-03-22'),
    },
  ];

  constructor() {}
}

export { ClassesService, Class };
