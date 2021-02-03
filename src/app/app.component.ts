import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GamaStore';
  item = ['German', 'Andrea', 'Rosa']
  
  power = 10;
 

  addItem() {
    this.item.push('nuevo item');
  }
  deleteItem(index: number) {
    this.item.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('pooduct');
    console.log(id);
  }


}
