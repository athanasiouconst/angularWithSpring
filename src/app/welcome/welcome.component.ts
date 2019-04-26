import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Message';
  welcomeMessageFromService: string ;
  name = '';

  // ActivatedRouter
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log('get Welcome Message');
    // console.log(this.service.executeMainBeanService().subscribe());
    this.service.executeMainBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeCustomMessage() {
    // console.log('get Welcome Message');
    // console.log(this.service.executeMainBeanService().subscribe());
    this.service.executeMainBeanCustomService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
