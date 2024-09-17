import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CarroItem } from '../../model/carroItem';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [],
  templateUrl: './carro.component.html',
})
export class CarroComponent implements OnChanges {
  @Input() items: CarroItem[] = [];
  totalPrice: number = 0;

  //Variable que contiene el id a eliminar para enviar al padre
  @Output() idProductEventEmiter = new EventEmitter();

  //Metodo que actualiza el componente cuando hay cambios en los input (items)
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
    this.saveSession();
  }

  //Metodo para emitir el id a eliminar al padre
  onDeleteProduct(id: number) {
    this.idProductEventEmiter.emit(id);
  }

  //Metodo que calcula el total de los productos agregados al carro
  calculateTotal(): void {
    this.totalPrice = this.items.reduce(
      (acumulador, item) => acumulador + item.cantidad * item.product.price,
      0
    );
  }

  //Guarda los datos en el session storage
  saveSession(): void {
    sessionStorage.setItem('carro', JSON.stringify(this.items));
  }
}
