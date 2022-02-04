import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {


  creditCardForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    expiryMonth: new FormControl('', [Validators.required]),
    expiryYear: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required]) 
  });

  paypalForm = new FormGroup({
    paypalMail: new FormControl('', [Validators.required])
  });

  confirm() {

  }

  cancel() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
