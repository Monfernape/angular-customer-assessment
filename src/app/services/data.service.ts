import { Injectable } from '@angular/core';
import { CUSTOMERS } from "../constants"
import { of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customers = of(CUSTOMERS);
  constructor() { }

  getCustomers(){
    return this.customers;
  }
}
