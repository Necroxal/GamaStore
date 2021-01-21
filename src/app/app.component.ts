import { Component } from '@angular/core';
import {Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GamaStore';
  item = ['German', 'Andrea', 'Rosa']
  
  products: Product[] = [
    {
      id: '1',
      image: 'assets/image/Producto1.png',
      title: 'Juego de baño',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/image/Producto2.png',
      title: 'Peerfumes',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/image/Producto3.png',
      title: 'Aromatizantes',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/image/Producto4.png',
      title: 'Mariscos',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/image/Producto5.png',
      title: 'Electronica',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/image/Producto6.png',
      title: 'Sabritas',
      price: 80000,
      description: 'bla bla bla bla bla'
    },

  ];

  addItem() {
    this.item.push('nuevo item');
  }
  deleteItem(index: number) {
    this.item.splice(index, 1);
  }
}
