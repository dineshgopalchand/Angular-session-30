import { Product } from './product.interface';

export interface ProductListRes {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
