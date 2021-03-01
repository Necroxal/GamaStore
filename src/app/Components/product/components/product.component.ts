import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges, 
  SimpleChanges, 
  DoCheck , 
  OnDestroy} from '@angular/core';
import { Product } from '../../.././product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy{
  //Se le puso el signo ! a la varibale product debido al typescript 2.7 que incluye
  //una comporbacion estrica de todas las propiedades 
  //Otra solcuión en ir a la configuracion de ts 
  //El ! quiere decir que el valo se le asiganrá en tiempo de ejecución
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor(){
    console.log('1 constructor');
  }
  
  // ngOnChanges(changes: SimpleChanges){
  //   console.log('2 onChanges');
  //   console.log(changes);
  // }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // Solo se ejecuta una vez y es cuando el componente ya fue puesto en pantalla
    console.log('3 ngOnInit');
  }
  ngDoCheck(){
    console.log('4 ngdOCHECK');
  }
  ngOnDestroy(){
    console.log('5 ngdOCHECK');
  }
  
  addCart(){
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }



}
