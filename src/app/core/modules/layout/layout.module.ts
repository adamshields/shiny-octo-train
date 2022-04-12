import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from '@/shared/modules/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule { }
