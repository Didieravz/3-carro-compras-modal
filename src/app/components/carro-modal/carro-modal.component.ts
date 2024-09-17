import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarroItem } from '../../model/carroItem';
import { CarroComponent } from '../carro/carro.component';

@Component({
  selector: 'app-carro-modal',
  standalone: true,
  imports: [CarroComponent],
  templateUrl: './carro-modal.component.html',
})
export class CarroModalComponent {
  //contiene los items del carro
  @Input() itemsModal: CarroItem[] = [];
  //Contiene el total price de productos
  //@Input() totalPriceModal: number = 0;

  //Variable que contiene el id a eliminar para enviar al padre
  @Output() idProductEventEmiter = new EventEmitter();

  //emite la señal para el padre y asi muestra el carro
  @Output() openEventEmiter = new EventEmitter();

  openCarro(): void {
    //se envia vacio, solo señal para el padre
    this.openEventEmiter.emit();
  }

  //Metodo para emitir el id a eliminar al padre
  onDeleteProduct(id: number) {
    this.idProductEventEmiter.emit(id);
  }
}
