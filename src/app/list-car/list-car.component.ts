import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarsDataService} from '../service/data/cars-data.service';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars = [];

  constructor(private carService: CarsDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.carService.retrieveAllCars('costas').subscribe(
      response => {
        console.log(response);
        this.cars = response;
      }
    );

  }

}

export class Car {
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
