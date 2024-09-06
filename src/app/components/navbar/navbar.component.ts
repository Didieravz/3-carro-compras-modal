import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarroItem } from '../../model/carroItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  //contiene los items del carro compras
  @Input() items: CarroItem[] = [];
  //emite la señal para el padre y asi muestra el carro
  @Output() openEventEmiter = new EventEmitter();

  openCarro(): void {
    //se envia vacio, solo señal para el padre
    this.openEventEmiter.emit();
  }
}
