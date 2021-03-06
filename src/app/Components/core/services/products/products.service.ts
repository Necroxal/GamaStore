import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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

  getAllProducts(){
    return this.products;
  }
  getProduct(id: string){
    return this.products.find((item) => id === item.id); //Si el id coindicio con el item id no los devolverá
  }
}
