import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {
    id: '1',
      image: 'assets/image/Producto1.png',
      title: 'Playera',
      price: 400,
      description: 'Playera de Platzi para disfrutar los cursos'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
