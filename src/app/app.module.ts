import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  ContentComponent,
  CustomerComponent,
  FooterComponent,
} from './components';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CustomerComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, PrimeNGModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
