import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-handling',
  templateUrl: './data-handling.component.html',
  styleUrls: ['./data-handling.component.scss']
})
export class DataHandlingComponent implements OnInit {
  topicName = 'Displaying Data';
  details = '<p >Some details on displaying data</p>';
  imageURL = 'https://dummyimage.com/100x60/992399/fff';

  isValid = true;

  colSpan = 3;
  rowSpan = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
