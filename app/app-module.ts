import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsList } from './products-list/products-list';
import { About } from './about/about';
import { InputInteger } from './input-integer/input-integer';
import { Shop } from './shop/shop';

import { CartComponent } from './cart/cart';
import { ProductFormComponent } from './product-form/product-form';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, ProductsList, About, CartComponent, InputInteger, Shop, ProductFormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
