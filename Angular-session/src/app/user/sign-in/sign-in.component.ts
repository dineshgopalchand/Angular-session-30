import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  constructor() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(this.signInForm);
  }

  get email(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  signInSubmit() {
    console.log(this.signInForm.value);
    console.log(this.signInForm.get('fullname'));
    // login api call will go here
    // this.signUpForm.reset();
  }


}
