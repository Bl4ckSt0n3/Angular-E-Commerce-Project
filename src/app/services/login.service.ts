import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApplicationConfig } from 'src/assets/app-config';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private config: ApplicationConfig = new ApplicationConfig();

  authToken: any;
  tokenGetter() {
    const token = localStorage.getItem("jwt");
    return token;
  }

  getSomeone() {
    let headers = new HttpHeaders();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.authToken
      }),
    };
    this.authToken = this.tokenGetter()?.toString();
    headers.append('Authorization', "Bearer "+this.authToken);
    headers.append('Content-Type', 'application/json');
    // console.log(this.authToken);
    // console.log(options.headers);
    return this.httpClient.get(`${this.config.loginUrl}/user/get_user`, {headers: options.headers}).pipe(map(res => res));
  }
  login(email: string, password: string) {
    return this.httpClient.post(`${this.config.loginUrl}/auth/login`, {email, password}).pipe(map(res => res));
  }
  constructor(
    private httpClient: HttpClient
  ) { }
}
