import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CustomerComponent } from './customer.component';
import { CUSTOMERS } from "../../constants"

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the customer input correctly', () => {
    let nameELement: HTMLButtonElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    const [customer] = CUSTOMERS
    component.customer = customer;
    fixture.detectChanges();
  
    expect(nameELement.textContent).toEqual(component.customer.company);
  });

});
