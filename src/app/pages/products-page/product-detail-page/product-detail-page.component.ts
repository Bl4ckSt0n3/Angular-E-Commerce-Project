import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { first, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  cardText: string = '';
  cardTitle: string = '';
  price: string = '';
  category: string = '';
  cardData: any;


  getProductData() {
    this.cardData = this.messageService.getData();
    this.cardText = this.cardData["cardText"];
    this.cardTitle = this.cardData["cardTitle"];
    this.price = this.cardData["price"];
    this.category = this.cardData["category"];

  }

  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 

    this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        if(params.params.param === 'details') {
          this.getProductData();
        }else {
          this.router.navigate(['/home']);
        }
      }
    )
   }

  ngOnInit(): void {
    // this.getProductData();
  }

}
