import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductLIstComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductComponent, ProductLIstComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductComponent],
})
export class ProductModule {}
