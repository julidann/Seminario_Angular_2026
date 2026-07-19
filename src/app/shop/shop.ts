import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data'; 
import { Product } from '../products-list/product';

@Component({
  selector: 'app-shop',
  standalone: false, 
  templateUrl: './shop.html'
  
})
export class Shop implements OnInit {
  products: Product[] = []; 

  constructor(private productDataService: ProductDataService) {}

 ngOnInit(): void {
  console.log("Entrando a Shop...");
  this.loadProducts();
}

loadProducts(): void {
  this.productDataService.getProducts().subscribe({
    next: (data) => {
      console.log("Productos cargados:", data);
      this.products = data;
    },
    error: (err) => console.error(err)
  });
}
}