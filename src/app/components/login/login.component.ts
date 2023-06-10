import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

interface Event {
  name: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: ''
  };

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {

  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }
}
