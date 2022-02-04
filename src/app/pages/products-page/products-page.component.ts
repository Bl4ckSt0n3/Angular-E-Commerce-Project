import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {


  priceSearchForm = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required])
  });

  items = [
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0 Card title 0 Card title 0 Card title 0  Card title 0  Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: "$100",
      category: "Steel"
    },
  ]; 
  searchPrice() {
    return
  }

  goDetail(cardText: string, cardTitle: string, price: string, category: string, path: string) {
    const detailData = {
      "cardTitle": cardTitle,
      "cardText": cardText,
      "price": price,
      "category": category
    }
    this.messageService.setDataObs(detailData);
    this.router.navigate([path])
  }
  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  clicked(): void {
    alert("anchor clicked !");
  }

}
