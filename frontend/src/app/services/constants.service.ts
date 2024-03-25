import { Injectable } from '@angular/core';

interface Section {
  value: string;
  viewValue: string;
}


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

  constructor() {}
}

export { ConstantsService, Section };
