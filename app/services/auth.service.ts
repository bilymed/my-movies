import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  private host: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.host + "/login", user, { observe: "response" });
  }


  save(token) {
    localStorage.setItem('token', token);
  }

}
