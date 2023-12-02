import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);
  
  constructor() { 
    this.telegram.BackButton.hide();
  }
}
