import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formSuccess = false;
  constructor() {}

  ngOnInit(): void {}
  formSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      console.log(form.value);
      // call api to send form details

      setTimeout(() => {  // Assume API response time is 2 seconds
        this.formSuccess = true;
        setTimeout(() => { // remove success message after 3 seconds
          this.formSuccess = false;
        }, 3000);
      }, 2000);
    }
  }
}
