import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { IProduct } from '../product.model';
import allProducts from '../products.json';

@Component({
  imports: [CartItemComponent],
  selector: 'bot-cart',
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: IProduct[] = [allProducts[2], allProducts[4]];
}
