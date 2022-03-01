import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfig } from 'src/assets/app-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private config: ApplicationConfig = new ApplicationConfig();
  returnItemLength() {
    return 11
  }
  authToken: any;
  tokenGetter() {
    const token = localStorage.getItem("jwt");
    return token;
  }

  getProduct(prodTitle: any) {
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

    return this.httpClient.get(`${this.config.loginUrl}/products/`+prodTitle).pipe(map(res => res));
  }
  constructor(private httpClient: HttpClient) { }
}
