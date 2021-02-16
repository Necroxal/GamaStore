import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DemoComponent } from './Components/demo/demo.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { LayoutComponent } from './Components/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
