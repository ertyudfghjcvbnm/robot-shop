import { Component, input } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProduct } from '../product.model';

@Component({
  selector: 'bot-deal-list',
  imports: [ProductDetailsComponent],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.css',
})
export class DealListComponent {
  readonly products = input.required<readonly IProduct[]>();
}
