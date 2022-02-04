import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    // localStorage.removeItem("loggedIn");
    // window.location.reload();
    this.router.navigate(["/login"]);
  }

  

  enable:boolean = false;
  
  constructor(private router: Router) {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if(e.url == "/" || e.url == "/login" || e.url == "/home" || e.url == "/register"){ //
          this.enable = false;
        }
        else{
          this.enable = true;
        }
      }
    });
  }
}
