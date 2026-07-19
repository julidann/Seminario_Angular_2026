import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs'; // Importamos tap
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private URL = 'https://68572c0c21f5d3463e549e99.mockapi.io/api/v1/Products';
  private _productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  public products$: Observable<Product[]> = this._productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshProducts(); // Cargamos al iniciar
  }

  // Método centralizado para traer la lista de la API y actualizar el Subject
  private refreshProducts(): void {
    this.http.get<Product[]>(this.URL).subscribe(data => {
      this._productsSubject.next(data);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  createProduct(product: any): Observable<any> {
    // Usamos tap para disparar el refresco SOLO si el POST fue exitoso
    return this.http.post(this.URL, product).pipe(
      tap(() => this.refreshProducts())
    );
  }

  deleteProduct(id: string): Observable<any> {
    // Usamos tap para disparar el refresco SOLO si el DELETE fue exitoso
    return this.http.delete(`${this.URL}/${id}`).pipe(
      tap(() => this.refreshProducts())
    );
  }

  updateProduct(id: number, cambios: any) {
  return this.http.patch(`${this.URL}/${id}`, cambios).subscribe();
}
}