import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService,Section } from 'src/app/services/constants.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent {
  form!: FormGroup;
  sections!: Section[] ; // Example array of sections



  constructor(private formBuilder: FormBuilder,private constantService:ConstantsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
      dob: ['', Validators.required], // Added Date of Birth field
      password: ['', Validators.required],
      section: ['', Validators.required] // Added Section selection field
    });


    // setting the sections
    this.sections = this.constantService.sections;
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.form.value)
    this.form.reset();
  }
}
