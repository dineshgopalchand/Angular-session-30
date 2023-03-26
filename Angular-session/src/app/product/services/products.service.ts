import { Product } from './../interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListRes } from '../interface/product-list-response.interface';

@Injectable()
export class ProductsService {
  productListURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  fetchProductList() {
    return this.http.get<ProductListRes>(this.productListURL);
  }
  fetchProductDetail(productId: number) {
    return this.http.get<Product>(this.productListURL + '/' + productId);
  }
}
