import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './Components/layout/layout.component';
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
        loadChildren: () => import('./Components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./Components/demo/demo.module').then(m=> m.DemoModule)
      },
    ]
  },
  
  {
    path: '**',
    loadChildren: () => import('./Components/page-not-found/page-not-found.module').then(m=> m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules //Carga inicial precaragda
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
