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
    rating1: 4.51
  }
  currencyType = 'EUR';
  constructor() { }

  ngOnInit(): void {
  }

  // get JSON() {
  //   return JSON;
  // }

}
