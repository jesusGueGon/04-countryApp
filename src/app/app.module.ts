import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SharedModule,
     PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
