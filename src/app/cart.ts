import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [];
  private _cartListSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  
  public cartList$: Observable<Product[]> = this._cartListSubject.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    const item = this.cartList.find(p => p.id === product.id);

    if (item) {
      item.quantity += product.quantity;
    } else {
      this.cartList.push({ ...product });
    }
    
    this._cartListSubject.next([...this.cartList]);
    
    console.log('Contenido del carrito transmitido:', this.cartList);
  }

  getCart(): Product[] {
    return this.cartList;
  }
}