import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-car-angular',
  templateUrl: './list-car-angular.component.html',
  styleUrls: ['./list-car-angular.component.css']
})

export class ListCarAngularComponent implements OnInit {


  carsAngular = [
    new CarAngular(1, 'costas', 'Ford 1', '2005', false, new Date()),
    new CarAngular(2, 'costas', 'Ford 2', '2006', false, new Date()),
    new CarAngular(3, 'costas', 'Ford 3', '2007', false, new Date()),
    new CarAngular(4, 'costas', 'Ford 4', '2008', false, new Date()),
    new CarAngular(5, 'costas', 'Ford 5', '2009', false, new Date()),
    new CarAngular(6, 'costas', 'Ford 6', '2010', false, new Date())


  ];

  constructor() { }

  ngOnInit() {
  }

}

export class CarAngular {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public model: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}
