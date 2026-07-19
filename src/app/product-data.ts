import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private URL = 'https://68572c0c21f5d3463e549e99.mockapi.io/api/v1/Products';
  private _productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  public products$: Observable<Product[]> = this._productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {
    if (this._productsSubject.getValue().length === 0) {
      this.http.get<Product[]>(this.URL).subscribe(data => {
        this._productsSubject.next(data);
      });
    }
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}