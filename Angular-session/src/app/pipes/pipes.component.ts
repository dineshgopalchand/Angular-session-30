import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  details = {
    name: 'DineSh GopAl ChanD',
    date: new Date(),
    coursePrice: 2300033,
    rating: 4.40033033433,
    rating1: 4.51,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum consectetur soluta. Sapiente, cumque, at quo eius commodi expedita dicta odio recusandae temporibus incidunt magnam minus porro blanditiis ut quibusdam.'
  }
  currencyType = 'EUR';
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    const formattedDate=this.datePipe.transform(new Date(),'short');
    console.log(formattedDate);
  }

  // get JSON() {
  //   return JSON;
  // }

}
