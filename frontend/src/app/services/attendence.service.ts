import { Injectable, OnInit } from '@angular/core';

interface AttendenceList{
  roll:string,
  name:string,
  isPresent:boolean
}

@Injectable({
  providedIn: 'root'
})
 class AttendenceService implements OnInit{

// Create an array with 50 entries
 studentList: AttendenceList[] = [];


  ngOnInit(){
    
  }

  constructor() { 
    for (let i = 0; i < 20; i++) {
      // Assuming some placeholder values for roll and name
      const entry: AttendenceList = {
        roll: `2021CS${i + 1}`,
        name: `Student_${i + 1}`,
        isPresent: false // Initially assuming all students are absent
      };
    
      // Push the entry into the array
      this.studentList.push(entry);
    
      
    }

    // console.log(this.attendenceArray)
  }
}


export {AttendenceService,AttendenceList}
