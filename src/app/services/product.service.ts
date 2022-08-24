import { Injectable } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../products';
import { Observable, of } from 'rxjs';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.commentService.add('CommentService: fetched products');
    return products;
  }
  getProduct(id: number): Observable<Product> {
    // For now, assume that a product with the specified `id` always exists.
    const product = PRODUCTS.find(h => h.id === id)!;
    this.commentService.add(`ProductService: fetched product id=${id}`);
    return of(product);
  }
 
  constructor(private commentService: CommentService) { }
}
