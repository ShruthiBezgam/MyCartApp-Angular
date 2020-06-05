import { Component, OnInit } from '@angular/core';
//import { OktaAuthService } from './auth/auth-okta.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

   ngOnInit() {
    //this.authService.autoLogin();
    this.oktaAuth.isAuthenticated().then(val => this.isAuthenticated =val);
}
login() {
  this.oktaAuth.loginRedirect('/');
}

logout() {
  this.oktaAuth.logout('/');
}
  
}
