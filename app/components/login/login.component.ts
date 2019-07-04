import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  mode: number = 0;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(user) {

    this.authService.login(user).subscribe(
      response => {
        let token = response.headers.get('Authorization');

        console.log(token);
      }, error => {
        console.log(error);
        this.mode = 1;
      });
  }

}
