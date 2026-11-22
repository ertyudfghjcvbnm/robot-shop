import { Component, signal, input, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  imports: [CurrencyPipe, NgClass],
  selector: 'bot-cart-item',
  styleUrl: './cart-item.component.css',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  private cartService = inject(CartService);
  product = input.required<IProduct>();

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product());
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 };
  }
}
