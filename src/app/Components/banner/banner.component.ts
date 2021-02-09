import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit  { // eleemntos hijos renderizados
  mySwiper: Swiper; // elemtno
  images: string[] = [
    'assets/image/banner-1.jpg',
    'assets/image/banner-2.jpg',
    'assets/image/banner-3.jpg'
  ];

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
