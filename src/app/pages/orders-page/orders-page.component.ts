import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  model_1!: NgbDateStruct;
  model_2!: NgbDateStruct;
  date!: {year: number, month: number};
  
  
  basketItems: any[] = [
    {
      id: 1,
      amount: 1000,
      product: "steel for buildings",
      price: "99.90",
      
      date: new Date(2021, 10, 1),
      value: "steel for buildings"
    },
    {
      id: 2,
      amount: 1000,
      product: "steel for buildings",
      price: "109.90",
      
      date: new Date(2021, 10, 2),
      value: "steel for buildings" 
    },
    {
      id: 3,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 3),
      value: "steel for buildings" 
    },
    {
      id: 4,
      amount: 1000,
      product: "steel for buildings",
      price: "85.65",
      
      date: new Date(2021, 10, 4),
      value: "steel for buildings" 
    },
    {
      id: 5,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 5),
      value: "steel for buildings" 
    },
    {
      id: 6,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 6),
      value: "steel for buildings" 
    },
    {
      id: 7,
      amount: 1000,
      product: "steel for buildings",
      price: "79.75",
      
      date: new Date(2021, 10, 7),
      value: "steel for buildings" 
    },
    {
      id: 8,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 8),
      value: "steel for buildings" 
    },
    {
      id: 9,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 9),
      value: "steel for buildings" 
    },
    {
      id: 10,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 10),
      value: "steel for buildings" 
    },
    {
      id: 11,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 10),
      value: "steel for buildings" 
    },
    {
      id: 12,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 10),
      value: "steel for buildings" 
    },
    {
      id: 13,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      
      date: new Date(2021, 10, 10),
      value: "steel for buildings" 
    },
  ];

  itemLength: number = this.basketItems.length; 
  defaultOption: string = "Not Selected";

  onChangeofOptions(newGov: any) {
    if(newGov == "descending") {
      // this.basketItems.reverse();
      // this.basketItems.sort((a, b) => {return b.id-a.id}); // sort by id
      this.basketItems.sort((a, b) => {return b.date - a.date})
    }
    else if (newGov == "ascending") {
      this.basketItems.sort((a, b) => {return a.date-b.date});
    }
  }

  p: number = 1;
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
  constructor(private calendar: NgbCalendar) { }

  
  ngOnInit(): void {
    const dateNow = new Date();
    console.log(dateNow.toJSON());   
  }

  getDates() {
    const startDate = {
      day: this.model_1.day,
      month: this.model_1.month,
      year: this.model_1.year
    }
    const endDate = {
      day: this.model_2.day,
      month: this.model_2.month,
      year: this.model_2.year
    }
    var startTime = this.model_1.year + '-' +  this.model_1.month + '-' + this.model_1.day;
    var sDate = new Date(Date.parse(startTime)).toJSON();
    
    var endTime = this.model_2.year + '-' +  this.model_2.month + '-' + this.model_2.day
    var eDate = new Date(Date.parse(endTime)).toJSON();

    console.log(startDate);
    console.log(sDate);

    console.log(endDate);
    console.log(eDate);
  }

}
