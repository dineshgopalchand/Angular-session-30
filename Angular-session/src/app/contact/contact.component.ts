import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  unameVal='';
  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(e:SubmitEvent){
    e.preventDefault();
    console.log(this.unameVal);
  }
  logValue(inputField:NgModel){
    console.log(inputField.value);
  }

}
