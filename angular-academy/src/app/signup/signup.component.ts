import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private router: Router,) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.signupForm.value);
  }
}
