import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductLIstComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.fetchProductList().subscribe((res) => {
      this.productList = res.products;
    });
  }
}
