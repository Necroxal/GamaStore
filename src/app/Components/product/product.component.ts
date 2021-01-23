import { Component, OnInit , Input} from '@angular/core';
import {Product} from '../../product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //Se le puso el signo ! a la varibale product debido al typescript 2.7 que incluye
  //una comporbacion estrica de todas las propiedades 
  //Otra solcuión en ir a la configuracion de ts 
  //El ! quiere decir que el valo se le asiganrá en tiempo de ejecución
 @Input() product: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
