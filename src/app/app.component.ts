import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projectAfrica';

  redirect(url: string) {
    this.router.navigate([url]);
  }
  logout() {
    // window.location.reload();
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  // https://vipleague.im/basketball-schedule-streaming-links
  // https://www.weifieldcontracting.com/contact/

  enable:boolean = true;
  

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtHelper: JwtHelperService
    ) {

      const token: any = localStorage.getItem("jwt");
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          if( e.url == "/login" || e.url == "/user/register"){
            localStorage.removeItem("jwt");
            this.enable = false;
          }
          else if (e.url == "/") {
            if (jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") === null) {
              this.enable = false;
            }
            else if (localStorage.getItem("jwt") !== null) {
              this.enable = true;
            }
          }
          else if ( e.url == "/home") {
            if (jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") === null) {
              this.enable = false;
            }
            else if (localStorage.getItem("jwt") !== null) {
              this.enable = true;
            }
          }
          else if (e.url == "/contact") {
            if(jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") === null){
              this.enable = false;
            }

            else if(localStorage.getItem("jwt") !== null) {
              this.enable = true;
            }
          }
          else if(e.url == "/about") {
            if(jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") === null){
              this.enable = false;
            }
            else if(localStorage.getItem("jwt") !== null) {
              this.enable = true;
            }
          }
          // else if(e instanceof RoutesRecognized) {
          //   if(e.state.root.firstChild?.params.param) {
          //     if(jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") === null) {
          //       this.enable = false;
          //     }
          //     else {
          //       this.enable = true;
          //     }
          //   }
          // }
          
          else{
            this.enable = true;
          }
        }
        // else if(e instanceof RoutesRecognized) {
        //   if(e.state.root.firstChild?.params.param) {
        //     if(jwtHelper.isTokenExpired(token) || localStorage.getItem("jwt") == null) {
        //       this.enable = false;
        //     }
        //     else {
        //       this.enable = true;
        //     }
        //   }
        // }
      });
  }
}
