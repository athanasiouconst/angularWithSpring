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
  message: string ;

  constructor(private carService: CarsDataService,
              private router: Router) {
  }
  ngOnInit() {
    this.refreshCars();
  }

  refreshCars(){
    this.carService.retrieveAllCars('costas').subscribe(
      response => {
        console.log(response);
        this.cars = response;
      }
    )
  }



  deleteCar(id) {
    console.log(`delete car ${id}` );
    this.carService.deleteCar('costas', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Car ${id} Successful!`;
        this.refreshCars();
      }
    )
  }

  updateCar(id) {
    console.log(`update ${id}`);
    this.router.navigate(['cars',id])
  }

  addCar() {
    this.router.navigate(['cars',-1])
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
