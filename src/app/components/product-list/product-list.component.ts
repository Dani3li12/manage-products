import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { CommentService } from '../../services/comment.service';

@Component({
 selector: 'app-product-list',
 templateUrl: './product-list.component.html',
 styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct!: Product;
  constructor(private productService: ProductService, private commentService:CommentService) { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.commentService.add(`ProductsComponent: Selected product id=${product.id}`);
  }
 
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }  
 
 ngOnInit(): void {
  this.getProducts();
  }
}