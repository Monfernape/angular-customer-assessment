import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  public customers: Observable<Customer[]> = this.service.getCustomers();

  constructor(private service: DataService) {}

  getCustomerKey(index: number, item: Customer) {
    return item.id;
  }
}
