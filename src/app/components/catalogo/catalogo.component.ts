import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../model/product';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {
  //Variable que recibe products desde el padre
  @Input() productos!: Product[];
  //instancia para emitir el producto hacia el padre
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter();

  //Metodo para agregar el producto al carro de compras
  onAddCar(producto: Product){
    this.productEventEmiter.emit(producto);
  }
}
