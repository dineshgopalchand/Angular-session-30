import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm=new FormGroup({
      'fullname': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'repass': new FormControl(''),
    });
  }

  ngOnInit(): void {
    console.log(this.signUpForm);
  }
  signUpSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset()
  }
}
