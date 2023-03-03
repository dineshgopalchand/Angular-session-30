import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('dinesh@gmail.com', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      password: new FormControl('pass123', [Validators.required]),
      repass: new FormControl('pass123', [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(this.signUpForm);
  }
  get fullname(): FormControl {
    return this.signUpForm.get('fullname') as FormControl;
  }
  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
  get repass(): FormControl {
    return this.signUpForm.get('repass') as FormControl;
  }
  signUpSubmit() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.get('fullname'));
    // this.signUpForm.reset();
  }
}
