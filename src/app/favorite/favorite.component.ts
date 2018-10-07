import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavourite') isSelected:Boolean =false
  @Output() change = new EventEmitter();
      constructor() { }

      ngOnInit() {
      }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({isSelected: this.isSelected});
  }
}

export interface FavouriteModel{
  isSelected :Boolean
}
