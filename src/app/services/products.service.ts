import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  returnItemLength() {
    return 11
  }
  constructor() { }
}
