import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {

  // https://stackblitz.com/edit/angular-dynamic-checkbox-set

  itemForm!: FormGroup;
  isNull: boolean = false;
 
  basketItems: any[] = [
    {
      id: 1,
      amount: 1000,
      product: "steel for buildings",
      price: "99.90",
      value: "steel for buildings" 
    },
    {
      id: 2,
      amount: 1000,
      product: "steel for buildings",
      price: "109.90",
      value: "steel for buildings" 
    },
    {
      id: 3,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
    {
      id: 4,
      amount: 1000,
      product: "steel for buildings",
      price: "85.65",
      value: "steel for buildings" 
    },
    {
      id: 5,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
    {
      id: 6,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
    {
      id: 7,
      amount: 1000,
      product: "steel for buildings",
      price: "79.75",
      value: "steel for buildings" 
    },
    {
      id: 8,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
    {
      id: 9,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
    {
      id: 10,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      value: "steel for buildings" 
    },
  ];

  basketItemsLength = this.basketItems.length;
  prev_total: any = 0;
  get_prev_total() {
    this.basketItems.forEach(e => {
      this.prev_total += parseFloat(e.price);
    })
    return this.prev_total.toFixed(2);
  }
  
  get ordersFormArray() {
    return this.itemForm.controls.orders as FormArray;
  }

  // sumOfPrices: any[] = [];
  check: boolean = true;
  checkAllOptions(e: any) {
    this.basketItems.forEach(val => {
      val.isSelected = e;
    });
  }

  removeItem(id: any) { // db remove operation will be written instead of that all
    this.basketItems.forEach(element => { 
      if(element.id === id) {
        this.basketItems.splice(this.basketItems.indexOf(element), 1);
        this.ordersFormArray.removeAt(this.ordersFormArray.value.findIndex((val: any) => val.id === element.id));
        
      }
    });
    
    this.basketItemsLength = this.basketItems.length;
    // this.confirm();
    this.re_calc();
  }

  total: any = 0.00;
  // sum: string = '';
  // totalPriceOfItems() {
  //   this.basketItems.forEach(element => {
  //     if (element.isSelected) {
  //       this.sumOfPrices.push(parseFloat(element.price));
  //     }
      
  //   });
  //   for(let i=0; i<this.sumOfPrices.length; i++) {
  //     this.total += this.sumOfPrices[i];
  //   }
  //   return this.total;
  // }


  private addCheckboxesToForm() {
    this.basketItems.forEach(() => this.ordersFormArray.push(new FormControl(true)));
  }
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    ) { 
    this.itemForm = this.formBuilder.group({
      orders: new FormArray([])
    });
     this.addCheckboxesToForm();
    //this.sum = this.totalPriceOfItems().toString();
    this.basketItems.forEach((val: any) => val.isSelected = true);
    // this.basketItems.forEach((val: any) => {
    //   this.total += parseFloat(val.price);
    // });
   }

   re_calc() {
    this.prev_total = 0.00;

    const selectedOrderPrices = this.itemForm.value.orders.map(
      (checked:any, i:any) => checked ? this.basketItems[i].price : null).filter(
        (v:any) => v !== null);
    
    selectedOrderPrices.forEach((element: any) => {
      this.prev_total += parseFloat(element);
    });
    this.prev_total = this.prev_total.toFixed(2);
   }
  

  confirm() {
    this.total = 0.00;

    const selectedOrderPrices = this.itemForm.value.orders.map(
      (checked:any, i:any) => checked ? this.basketItems[i].price : null).filter(
        (v:any) => v !== null);
    
    selectedOrderPrices.forEach((element: any) => {
      this.total += parseFloat(element);
    });
    // this.sum = this.total
    this.total = this.total.toFixed(2);

    if(this.total <= 0) {
      this.isNull = false;
    }else{
      this.isNull = true;
    }
    this.re_calc();
    // console.log(this.itemForm.value.orders);
    
  }

  next() {
    if(this.total <= 0) {
      this.toastr.error("You can not continue by 0.", "Error!");
      return
    }
    else {
      this.router.navigate(['/payment']);
    }
  }

  ngOnInit(): void {
    this.get_prev_total();
  }

}
