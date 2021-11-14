import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, DividerModule, InputTextModule, CardModule],
})
export class PrimeNGModule {}
