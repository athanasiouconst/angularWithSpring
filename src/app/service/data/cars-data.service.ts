import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../../list-car/list-car.component';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private http:HttpClient) { }

  retrieveAllCars(username) {
    console.log(this.http.get<Car[]>(`http://localhost:8080/users/${username}/cars`));
    return this.http.get<Car[]>(`http://localhost:8080/users/${username}/cars`);

  }
}
