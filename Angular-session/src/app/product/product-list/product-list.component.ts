import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductListRes } from '../interface/product-list-response.interface';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductLIstComponent implements OnInit {
  productListURL = 'https://dummyjson.com/products';
  productList: Product[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProductListRes>(this.productListURL).subscribe((res) => {
      this.productList = res.products;
    });
  }
}
