import { Component, inject } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';

@Component({
  imports: [ProductDetailsComponent],
  selector: 'bot-catalog',
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  private productsService =inject(ProductsService);
  products = this.productsService.getProducts();
}
