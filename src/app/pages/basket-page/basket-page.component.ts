import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {

  // https://stackblitz.com/edit/angular-dynamic-checkbox-set

  itemForm!: FormGroup;

  basketItems: any[] = [
    {
      id: 1,
      amount: 1000,
      product: "steel for buildings",
      price: "99.90",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 2,
      amount: 1000,
      product: "steel for buildings",
      price: "109.90",
      isSelected: true,
      value: "steel for buildings" 
    },
    {
      id: 3,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 4,
      amount: 1000,
      product: "steel for buildings",
      price: "85.65",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 5,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 6,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 7,
      amount: 1000,
      product: "steel for buildings",
      price: "79.75",
      isSelected: true,
      value: "steel for buildings" 
    },
    {
      id: 8,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 9,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
    {
      id: 10,
      amount: 1000,
      product: "steel for buildings",
      price: "100",
      isSelected: false,
      value: "steel for buildings" 
    },
  ];

  
  get ordersFormArray() {
    return this.itemForm.controls.orders as FormArray;
  }

  // sumOfPrices: any[] = [];

  checkAllOptions() {
    // if (this.basketItems.every(val => val.isSelected === true)) {
    //   this.basketItems.forEach(
    //     val => { 
    //       val.isSelected = false 
    //     });
    // }
    // else {
    //   this.basketItems.forEach(
    //     val => {
    //       val.isSelected = true 
    //     });
    //   }

    if(this.itemForm.value.orders.every((val: boolean) => val === true)) {
      this.itemForm.value.orders.forEach(
        (val: boolean) =>  {
          val = false;
        }
      );
    }
    else {
      this.itemForm.value.orders.forEach(
        (val: boolean) =>  {
          val = true;
        }
      );
    }
    
  }

  removeItem(id: any) {
    this.basketItems.forEach(element => { // db remove operation will be written instead of that all
      if(element.id === id) {
        this.basketItems.splice(this.basketItems.indexOf(element), 1);
      }
    });
  }

  total: any = 0;
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



  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
    this.itemForm = this.formBuilder.group({
      orders: new FormArray([])
    });
     this.addCheckboxesToForm();
    //this.sum = this.totalPriceOfItems().toString();
    

   }

  private addCheckboxesToForm() {
    this.basketItems.forEach(() => this.ordersFormArray.push(new FormControl(true)));
  }

  confirm() {
    this.total = 0;
    const selectedOrderPrices = this.itemForm.value.orders.map(
      (checked:any, i:any) => checked ? this.basketItems[i].price : null).filter(
        (v:any) => v !== null);
    
    selectedOrderPrices.forEach((element: any) => {
      this.total += parseFloat(element);
    });
    // this.sum = this.total
    this.total = this.total.toFixed(2);
    console.log(this.itemForm.value.orders);
  }

  next() {
    this.router.navigate(['/payment'])
  }

  ngOnInit(): void {
    // const selectedOrderPrices = this.itemForm.value.orders.map(
    //   (checked:any, i:any) => checked ? this.basketItems[i].price : null).filter(
    //     (v:any) => v !== null);
    
    // selectedOrderPrices.forEach((element: any) => {
    //   this.total += parseFloat(element);
    // });
    // this.total = this.total.toFixed(2);
  }

}
