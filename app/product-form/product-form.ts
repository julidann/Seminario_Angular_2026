import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: ProductDataService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      type: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      clearance: [false]
    });
  }

onSubmit() {
  if (this.productForm.valid) {
    this.dataService.createProduct(this.productForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/products']); 
        window.location.reload();
      },
      error: (err) => console.error('Error al crear', err)
    });
  }
}
}

