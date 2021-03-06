import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListCarComponent} from './list-car/list-car.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {ListCarAngularComponent} from './list-car-angular/list-car-angular.component';
import {CarComponent} from './car/car.component';


const routes: Routes = [
  {path: '', component: LoginComponent}, // canActivate, RouteGuardService
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'carsAngular', component: ListCarAngularComponent, canActivate: [RouteGuardService]},
  {path: 'cars', component: ListCarComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'cars/:id', component: CarComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
