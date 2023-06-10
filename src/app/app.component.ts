import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authService: AuthService;

  constructor(public _authService: AuthService) {
    this.authService = _authService;
  }
}