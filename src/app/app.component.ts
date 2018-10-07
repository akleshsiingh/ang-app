
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list;

  onAdd(){
this.list = [{id:1,name:" item 1"}, {id:2,name:" item 2"} , {id:3,name:" item 3"}];   
  }
  trackLogic(index,i){
    return i?i.id:undefined;

  }
}
