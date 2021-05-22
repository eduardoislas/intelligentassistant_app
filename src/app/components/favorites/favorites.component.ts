import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

  @Input() public favorite: Favorite[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.favorite);
  }

}
