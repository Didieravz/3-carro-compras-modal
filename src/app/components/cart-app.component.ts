import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarroComponent } from './carro/carro.component';
import { CarroItem } from '../model/carroItem';
import { NavbarComponent } from './navbar/navbar.component';
import { CarroModalComponent } from './carro-modal/carro-modal.component';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, NavbarComponent, CarroModalComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];

  items: CarroItem[] = [];
  //Variable que contiene el total de los items en el carro
  //totalPrice: number = 0;

  //Bandera para el carro
  showCarro: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    //Recupera los items guardados en el sessionStorage si no hay nada retorna arreglo vacio
    this.items = JSON.parse(sessionStorage.getItem('carro')!) || [];
    //this.calculateTotal();
  }

  //Metodo para agregar un producto al carro de compras
  onAddCar(producto: Product): void {
    //Valida si el producto ya fue agregado
    const hasProduct = this.items.find(
      (item) => item.product.id === producto.id
    );
    //Si fue agregado cambia la cantidad
    if (hasProduct) {
      this.items = this.items.map((item) => {
        if (item.product.id === producto.id) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        }
        return item;
      });
    } else {
      this.items = [
        ...this.items,
        {
          product: { ...producto },
          cantidad: 1,
        },
      ];
    }
    //this.calculateTotal();
    //this.saveSession();
  }

  //Metodo que elimina un producto por el id del carro
  onDeleteProduct(id: number): void {
    this.items = this.items.filter((item) => item.product.id !== id);
    if (this.items.length == 0) {
      sessionStorage.removeItem('carro');
    }
    //this.calculateTotal();
    //guarda en el sessionStorage los items del carro
    //this.saveSession();
  }

  //Metodo que calcula el total de los productos agregados al carro
  //  calculateTotal(): void {
  //    this.totalPrice = this.items.reduce(
  //      (acumulador, item) => acumulador + item.cantidad * item.product.price,
  //      0
  //    );
  //  }

  //Guarda los datos en el session storage
  //  saveSession(): void {
  //    sessionStorage.setItem('carro', JSON.stringify(this.items));
  //  }

  //Metodo para cerrar el carro de compras
  openCar(): void {
    this.showCarro = !this.showCarro;
  }
}
