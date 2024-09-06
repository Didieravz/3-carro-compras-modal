import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  //Variable que recibe el product desde el padre
  @Input() producto!: Product;
  //instancia para emitir el producto al padre
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter();

  //Metodo para agregar productos al carro
  onAddCar(producto: Product) {
    this.productEventEmiter.emit(producto);
  }
}
