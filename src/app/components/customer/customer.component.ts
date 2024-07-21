import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/types';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  @Input() customer!: Customer;

  constructor() {}

  ngOnInit(): void {}
}
