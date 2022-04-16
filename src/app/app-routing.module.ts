import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/modules/layout/page-not-found/page-not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
     //Wild Card Route for 404 request
     { path: 'adam', pathMatch: 'full', component: PageNotFoundComponent },
     { path: 'product', pathMatch: 'full', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
