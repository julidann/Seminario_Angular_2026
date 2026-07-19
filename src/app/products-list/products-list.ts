import { Component, OnInit } from '@angular/core';
import { Product } from './product'; 
import { ProductDataService } from '../product-data'; 
import { CartService } from '../cart'; 

@Component({
  selector: 'app-products-list',
  standalone: false, 
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.scss']
})
export class ProductsList implements OnInit {

  products: Product[] = [];

  constructor(
    private productsDataService: ProductDataService,
    private cartService: CartService
  ){ }

 ngOnInit(): void {
  this.productsDataService.getProducts().subscribe(data => {
   
    this.products = data.map(p => ({ ...p, quantity: p.quantity || 0 }));
  });
}

  upQuantity(product: Product): void {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  onChangeQuantity(event: any, product: Product): void {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 0) {
      product.quantity = 0;
    } else if (value > product.stock) {
      product.quantity = product.stock;
    } else {
      product.quantity = value;
    }
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0; 
    }
  }
}