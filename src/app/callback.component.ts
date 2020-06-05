import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './auth/auth-okta.service';

@Component({ template: `` })
export class CallbackComponent implements OnInit {

  constructor(private okta: OktaAuthService) {}

  ngOnInit() {
    // Handles the response from Okta and parses tokens
    this.okta.handleAuthentication();
  }
}