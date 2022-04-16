import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/modules/layout/layout.module';
import { ProductsModule } from './products/products.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { DataService } from './shared/services/data.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    ProductsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
