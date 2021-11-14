import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/types';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public customers: Customer[] = [];
  private service: DataService;

  constructor(service: DataService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getCustomers().subscribe(customers => this.customers = customers);
  }

  getCustomerKey(index: number, item: Customer){
    return item.id
  }

}
