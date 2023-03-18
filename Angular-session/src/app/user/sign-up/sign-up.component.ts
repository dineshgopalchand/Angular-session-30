import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/common/validators/confirm-password-validator';
import { UsernameValidators } from '../../common/validators/username-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup(
      {
        fullname: new FormControl('', [
          Validators.required,
          UsernameValidators.cannotContainSpace,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      ConfirmPasswordValidator.validate
    );
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
  get confirmPassword(): FormControl {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }
  signUpSubmit() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.get('fullname'));
    // signup api call will go here
    // this.signUpForm.reset();
  }
}
