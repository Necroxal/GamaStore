import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './Components/layout/layout.component';
import {ContactComponent} from './Components/contact/contact.component';
import {DemoComponent} from './Components/demo/demo.component';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import { AdminGuard } from './admin.guard';
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
        loadChildren: () => import('./Components/product/product.module').then(m => m.ProductModule)
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
