import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Produit 1', description: 'Description produit 1', price: 20, category: "iphone" },
    { id: 2, name: 'Produit 2', description: 'Description produit 2', price: 20, category: "ipad" },
    { id: 3, name: 'Produit 3', description: 'Description produit 3', price: 30, category: "iphone" },
    { id: 4, name: 'Produit 4', description: 'Description produit 4', price: 40, category: "ipad" },
    { id: 5, name: 'Produit 5', description: 'Description produit 5', price: 50, category: "iphone" },
    { id: 6, name: 'Produit 6', description: 'Description produit 6', price: 60, category: "ipad" },
  ];
  // Get all data
  getProducts(): Product[] {

    let products = localStorage.getItem('products');
    if (products) {
      return JSON.parse(products);
    }
    return this.products;
  }
}
