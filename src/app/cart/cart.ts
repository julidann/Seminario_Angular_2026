import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products-list/product';
import { CartService } from '../cart';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {

  // Primero declaramos la propiedad sin asignarle nada
  cartList$!: Observable<Product[]>;

  // Inyectamos el servicio en el constructor
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Nos aseguramos de asignarlo cuando el componente ya está inicializado
    this.cartList$ = this.cartService.cartList$;
  }

  getTotal(items: Product[]): number {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}