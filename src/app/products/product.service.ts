import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpErrorResponse, HttpContext } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CONTENT_TYPE } from '@/core/add-header.interceptor';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productsUrl = 'api/products/';
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log('Getting all products from the server.');
    return this.http.get<Product[]>('api/products/', {
      context: new HttpContext().set(CONTENT_TYPE, 'application/xml')
    }).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    product.id = null;
    return this.http.post<Product>(this.productsUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}