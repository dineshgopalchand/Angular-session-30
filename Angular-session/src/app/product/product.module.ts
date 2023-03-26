import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductLIstComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductComponent, ProductLIstComponent, ProductDetailComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ProductsService],
  exports: [ProductComponent],
})
export class ProductModule {}
