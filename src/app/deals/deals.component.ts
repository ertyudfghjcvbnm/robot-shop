import { Component, computed, inject } from '@angular/core';
import { DealListComponent } from '../deal-list/deal-list.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'bot-deals',
  imports: [DealListComponent],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css',
})
export class DealsComponent {
  private readonly productsService = inject(ProductsService);
  protected readonly deals;

  constructor() {
    const products = this.productsService.getProducts();
    this.deals = computed(() =>
      products().filter((product) => product.discount > 0),
    );
  }
}
