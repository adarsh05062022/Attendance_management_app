import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isStudent: boolean = true;
  studentLoginForm!: FormGroup;
  teacherLoginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.studentLoginForm = this.formBuilder.group({
      rollNumber: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      password: ['', Validators.required],
    });
    this.teacherLoginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.studentLoginForm.valid) {
      // Form is valid, perform login operation
      // console.log(this.studentLoginForm.value);

      this.authServices
        .studentLogin(this.studentLoginForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response.success) {
            this.storeLogin(response, true);
          }

          this.showNotification(response);
        });
    } else {
      // Form is invalid, show error messages
    }
    if (this.teacherLoginForm.valid) {
      // Form is valid, perform login operation
      console.log(this.teacherLoginForm.value);

      this.authServices
        .teacherLogin(this.teacherLoginForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response.success) {
            this.storeLogin(response, false);
          }
          this.showNotification(response);
        });
    } else {
      // Form is invalid, show error messages
    }
    this.studentLoginForm.reset();
    this.teacherLoginForm.reset();
  }

  showNotification(response: any): void {
    if (response.success) {
      this.toastr.success(response.message);
      return;
    }
    this.toastr.error(response.message);
  }

  changeLoginType() {
    this.studentLoginForm.reset();
    this.teacherLoginForm.reset();
    this.isStudent = !this.isStudent;
  }

  storeLogin(response: any, isStudent: boolean): void {
    let token = response.token;
    let user = response.user;
    let user_type = isStudent ? 'student' : 'teacher';

    user = { user_type: user_type, ...user };

    const USER_DATA = { token, user };
    localStorage.setItem('USER_DATA', JSON.stringify(USER_DATA));
  }
}
