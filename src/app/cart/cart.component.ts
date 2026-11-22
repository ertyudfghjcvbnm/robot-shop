import { Component, inject, Signal } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  imports: [CartItemComponent],
  selector: 'bot-cart',
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  private cartService = inject(CartService);
  cartItems: Signal<IProduct[]> = this.cartService.cart;
}
