import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import allProducts from '../products.json'

@Component({
  imports: [ProductDetailsComponent],
  selector: 'bot-catalog',
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  products = allProducts;
}
