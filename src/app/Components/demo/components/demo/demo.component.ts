import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title = 'GamaStore';
  // tslint:disable-next-line: member-ordering
  item = ['German', 'Andrea', 'Rosa'];
  power = 10;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addItem() {
    this.item.push('nuevo item');
  }
  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.item.splice(index, 1);
  }

}
