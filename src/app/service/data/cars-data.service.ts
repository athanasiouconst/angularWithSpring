import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../../list-car/list-car.component';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private http: HttpClient) {
  }

  retrieveAllCars(username) {
    console.log(this.http.get<Car[]>(`http://localhost:8080/users/${username}/cars`));
    return this.http.get<Car[]>(`http://localhost:8080/users/${username}/cars`);
  }

  deleteCar(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/cars/${id}`);
  }

  retrieveCar(username, id){
    return this.http.get<Car>(`http://localhost:8080/users/${username}/cars/${id}`);
  }

  updateCar(username, id, car){
    return this.http.put(
      `http://localhost:8080/users/${username}/cars/${id}`
      , car);
  }

  createCar(username, car){
    return this.http.post(
      `http://localhost:8080/users/${username}/cars`
      , car);
  }

}
