import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shop } from './shop/shop';
import { About } from './about/about';
import { ProductFormComponent } from './product-form/product-form';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: Shop
  },
  {
    path: 'add-product',
    component: ProductFormComponent
  },
  {
    path: 'about',
    component: About
  },
  { 
    path: '**', 
    redirectTo: 'products' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }