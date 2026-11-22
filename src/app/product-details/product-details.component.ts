import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'bot-product-details',
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(event: MouseEvent) {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100);
    console.log(event);
  }
}
