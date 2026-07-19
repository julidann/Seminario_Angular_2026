import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators'; 
import { Product } from '../products-list/product';
import { CartService } from '../cart';
import { ProductDataService } from '../product-data';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {

  cartList$!: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartList$ = this.cartService.cartList$;
  }

  getTotal(items: Product[] | null): number {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  
  clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      this.cartService.clearCart();
      
    }
  }


}