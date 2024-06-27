// src/app/login/login.component.ts
import { Component } from '@angular/core'; import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  body = {};

  private baseUrl = 'http://localhost:9090/authenticate/user';


  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
 

  }

  onSubmit(e: Event): void {
    e.preventDefault();

    console.log(this.username);
    console.log(this.password);

    this.body = {
      "userName": this.username,
      "password": this.password,
      "roles": "MAKER_CHECKER"
    }

    this.http.post<any>(this.baseUrl, this.body).subscribe(response => {
      console.log("response is " + response);
      this.authService.setToken(response.token);
    });
  }
}
