import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [
    {
      id: '1',
      image: 'assets/image/Producto1.png',
      title: 'Dados para D&D',
      price: 400,
      description: 'Dados para juego de rol'
    },
    {
      id: '2',
      image: 'assets/image/Producto2.png',
      title: 'Figura Among Us',
      price: 1500,
      description: 'Figura de among Us de colección'
    },
    {
      id: '3',
      image: 'assets/image/Producto3.png',
      title: 'Estrella de Navidad',
      price: 800,
      description: 'Estrella recién salida del gabacho'
    },
    {
      id: '4',
      image: 'assets/image/Producto4.png',
      title: 'Avion de Papel',
      price: 450000,
      description: 'Avión de papel de colección de él artista Shiranai Mikiju'
    },
    {
      id: '5',
      image: 'assets/image/Producto5.png',
      title: 'Corona de Flores',
      price: 72100,
      description: 'Corona de flores para festivales indie'
    },
    {
      id: '6',
      image: 'assets/image/Producto6.png',
      title: 'Point Black',
      price: 1250000,
      description: 'Puntos negros aleatorios de colección'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  clickProduct(id: number){
    console.log('pooduct');
    console.log(id);
  }

}