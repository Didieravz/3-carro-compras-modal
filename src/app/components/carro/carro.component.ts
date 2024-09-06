import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarroItem } from '../../model/carroItem';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [],
  templateUrl: './carro.component.html',
})
export class CarroComponent {
  @Input() items: CarroItem[] = [];
  @Input() total: number = 0;

  //Variable que contiene el id a eliminar para enviar al padre
  @Output() idProductEventEmiter = new EventEmitter();

  //Metodo para emitir el id a eliminar al padre
  onDeleteProduct(id: number) {
    this.idProductEventEmiter.emit(id);
  }
}
