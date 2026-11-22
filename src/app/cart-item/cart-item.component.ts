import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  imports: [CurrencyPipe, NgClass],
  selector: 'bot-cart-item',
  styleUrl: './cart-item.component.css',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  product = input.required<IProduct>();

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  removeFromCart() {
    
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 };
  }
}
