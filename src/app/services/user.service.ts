import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApplicationConfig } from 'src/assets/app-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private config: ApplicationConfig = new ApplicationConfig();

  authToken: any;
  tokenGetter() {
    const token = localStorage.getItem("jwt");
    return token;
  }

  createUser(userData: object) {
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
    console.log(userData);
    return this.httpClient.post(`${this.config.loginUrl}/user/create_user`, userData, {headers: options.headers})
    .pipe(
      map(res => res)
    );
  }
  
  constructor(
    private httpClient: HttpClient
  ) { }
}
