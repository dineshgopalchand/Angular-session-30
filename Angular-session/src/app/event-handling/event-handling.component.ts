import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.scss']
})
export class EventHandlingComponent implements OnInit {

  fullName = '';

  userFullName = 'Dinesh';
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log('Form submitted')
  }
  onSaveClick() {
    console.log('Save button get clicked');
  }
  inputChange(event: KeyboardEvent) {
    console.log((event.target as HTMLInputElement).value);
  }

  // changeInput(event: KeyboardEvent) {
  //   console.log(event);
  //   if (event.code === 'Enter') {
  //     this.fullName = (event.target as HTMLInputElement).value;
  //   }
  // }
  changeInputWithFilter(ele: HTMLInputElement) {
    // console.log(ele.value);
    // console.log('changeInputWithFilter');
    this.fullName = ele.value;
  }

  eventBubblingButtonClick(event: Event) {
    event.stopPropagation();
    console.log('eventBubblingButtonClick');
  }
  eventBubblingChildDivClick(event: Event) {
    event.stopPropagation();
    console.log('eventBubblingChildDivClick');
  }
  eventBubblingParentDivClick() {
    console.log('eventBubblingParentDivClick');
  }


  showUserFullName() {
    console.log(this.userFullName);
  }

}
