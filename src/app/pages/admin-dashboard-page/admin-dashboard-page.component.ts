import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.css']
})
export class AdminDashboardPageComponent implements OnInit {

  redirectUrl(url: string) {
    this.router.navigate([url]);
  }

  date() {
    return new Date();
  }

  quentity: number = 0;
  getItemQuentity() {
    this.quentity = this.itemService.returnItemLength();
  }
  constructor(
    private router: Router,
    private itemService: ProductsService
    ) { 
    setInterval(this.date, 1000);
    this.getItemQuentity();
   }

  ngOnInit(): void {
    
  }

}
