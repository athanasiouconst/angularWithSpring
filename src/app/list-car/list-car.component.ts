import {Component, OnInit} from '@angular/core';


export class Car {
  constructor(
    public id: number,
    public description: string,
    public model: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars = [
    new Car(1, 'Ford 1', '2005', false, new Date()),
    new Car(2, 'Ford 2', '2006', false, new Date()),
    new Car(3, 'Ford 3', '2007', false, new Date()),
    new Car(4, 'Ford 4', '2008', false, new Date()),
    new Car(5, 'Ford 5', '2009', false, new Date()),
    new Car(6, 'Ford 6', '2010', false, new Date())

    // {id: 1, description: 'Ford', model: '2005'},
    // {id: 2, description: 'Ford', model: '2006'},
    // {id: 3, description: 'Ford', model: '2007'},
    // {id: 4, description: 'Ford', model: '2008'},
    // {id: 5, description: 'Ford', model: '2009'}
  ];

  // car = {id: 1, description: 'Learn Spring'};

  constructor() {
  }

  ngOnInit() {
  }

}
