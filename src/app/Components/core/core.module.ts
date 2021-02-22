import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsService} from './services/products/products.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [  //Si se ejecuta cuando se ocupe
    ProductsService
  ]
})
export class CoreModule { }
