import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/product/components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DemoComponent } from './Components/demo/demo.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product/components/product-detail/product-detail.component';
import { LayoutComponent } from './Components/layout/layout.component';
import {SharedModule} from './Components/shared/shared.module';
import {CoreModule} from './Components/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
