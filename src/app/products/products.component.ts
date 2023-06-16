import { Component } from '@angular/core';
import {Product } from '../Model/Product';
import {products } from '../Model/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  public data: Product[] = products;
}
