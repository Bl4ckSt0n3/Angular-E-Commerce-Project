import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  redirectUrl() {
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
