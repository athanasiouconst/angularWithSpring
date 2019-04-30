import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ErrorComponent} from './error/error.component';
import {ListCarComponent} from './list-car/list-car.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';
import {HttpClientModule} from '@angular/common/http';
import { ListCarAngularComponent } from './list-car-angular/list-car-angular.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListCarComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ListCarAngularComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
