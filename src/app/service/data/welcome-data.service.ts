import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeMainBeanService() {

    // return this.http.get('http://localhost:8080/main-bean');
    return this.http.get<MainBean>('http://localhost:8080/main-bean');
    // console.log('Execute Main Bean Service');
    // console.log(this.http.get('http://localhost:8080//main-bean'));
  }


  executeMainBeanCustomService() {

    // return this.http.get('http://localhost:8080/main-bean');
    return this.http.get<MainBean>('http://localhost:8080/main-bean-custom');
    // console.log('Execute Main Bean Service');
    // console.log(this.http.get('http://localhost:8080//main-bean'));
  }

  executeMainBeanServiceWithPathVariable(name) {

    return this.http.get<MainBean>(
      `http://localhost:8080/main-bean/username/${name}`,
      // {headers}
    );
    // console.log("Execute Hello World Bean Service")
  }
}

export class MainBean {
  constructor(public message: string) {
  }
}
