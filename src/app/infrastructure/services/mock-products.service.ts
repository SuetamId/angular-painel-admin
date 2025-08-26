import { Injectable } from '@angular/core';
import { Product } from '../../core/ domain/product';

@Injectable({ providedIn: 'root' })
export class MockProductsService {
  private products: Product[] = [
    { id: 1, name: 'Notebook', price: 4500, stock: 10 },
    { id: 2, name: 'Mouse', price: 120, stock: 50 },
    { id: 3, name: 'Teclado', price: 300, stock: 30 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
