import {Component, OnInit} from '@angular/core';
import {Car} from '../list-car/list-car.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsDataService} from '../service/data/cars-data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id: number;
  car: Car;

  constructor(
    private carService: CarsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.car = new Car(this.id, '', '', '', false, new Date());

    if (this.id != -1) {
      this.carService.retrieveCar('costas', this.id)
        .subscribe(
          data => this.car = data
        );
    }
  }

  saveCar() {
    if (this.id == -1) { //=== ==
      this.carService.createCar('costas', this.car)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['cars']);
          }
        );
    } else {
      this.carService.updateCar('costas', this.id, this.car)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['cars']);
          }
        );
    }
  }

}
