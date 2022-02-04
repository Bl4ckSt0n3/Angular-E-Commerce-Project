import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  redirect() {
    this.router.navigate(["/register"]);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
