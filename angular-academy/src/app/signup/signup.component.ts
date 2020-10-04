import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { bothUpperCaseLowerCaseValidator } from './bothUppperCaseLowerCaseValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      bothUpperCaseLowerCaseValidator()
    ]),
    role: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.signupForm.value);
  }
}
