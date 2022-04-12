import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule { }
