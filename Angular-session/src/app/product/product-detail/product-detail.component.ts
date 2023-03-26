import { Product } from './../interface/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // productDetails:Product={} as Product;
  productDetails!:Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    const productId=1
    this.productsService.fetchProductDetail(productId).subscribe((res) => {
      this.productDetails = res;
    });
  }

}
