import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import {DemoComponent} from './Components/demo/demo.component';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {ProductDetailComponent} from './Components/product-detail/product-detail.component';
import {LayoutComponent} from './Components/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/home', //redireccionar a home cuando
        pathMatch: 'full', // tengamos la url en seco sin ningun path
      },
      {
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule) //Carga un modulo dinamicamente
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules //Carga inicial precaragda
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
