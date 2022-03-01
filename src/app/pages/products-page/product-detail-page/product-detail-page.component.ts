import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { first, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

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

   // https://stackblitz.com/edit/angular-ng-image-slider-events-dwcnut?embed=1
  getProductData() {
    this.cardData = this.messageService.getData();
    this.cardText = this.cardData["cardText"];
    this.cardTitle = this.cardData["cardTitle"];
    this.price = this.cardData["price"];
    this.category = this.cardData["category"];
    return this.cardData;
  }
  //ud: any;
  get(prodTitle: any) {
    this.ser.getProduct(prodTitle).pipe(first()).subscribe(
      (d: any) => {
        console.log(d);
        //this.ud = d;
        this.cardTitle = d.data.cardTitle;
        this.cardText = d.data.cardText;
        this.category = d.data.category;
        this.price = d.data.price;
      }
    )
    //return this.ud;
  }

  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ser: ProductsService,
  ) { 
    
    this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        // if(params.params.param === this.getProductData()["cardTitle"] && this.messageService.getData() !== null) {
        //   this.getProductData();
        // }

        try{
          this.get(params.params.param);
        }
        catch(err) {
          if(err) {
            this.router.navigate(['/products']);
          }
        }
        
        // if(params.params.param === this.get().data.firstName) {
        //   this.get();
        // }
        // else {
        //   this.router.navigate(['/products']);
        // }
      }
    )
   }

  ngOnInit(): void {
    // this.getProductData();
  }

}
