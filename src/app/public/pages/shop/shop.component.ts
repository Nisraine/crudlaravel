import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  products!: Product[];
  constructor(private productService: ProductsService, private cartService: CartService, private router: Router) {

  }


  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCartt(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }
}
