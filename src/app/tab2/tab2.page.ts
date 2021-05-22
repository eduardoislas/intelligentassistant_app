import { Component } from '@angular/core';
import { Favorite } from '../interfaces/interfaces';

import { FavoriteService } from '../services/favorite.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  favorite: Favorite[] = [];

  scrollActived = true;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {

    this.siguientes();

  }

  siguientes(event?, pull: boolean = false) {

    if (pull) {
      this.scrollActived = true;
      this.favorite = [];
    }
    this.favoriteService.getFavorites(pull)
      .subscribe(resp => {
        console.log(resp);
        this.favorite.push(...resp.favorite);

        if (event) {
          event.target.complete();
          if (resp.favorite.length === 0) {
            this.scrollActived = false;
          }
        }
      });
  }
  recargar(event) {
    this.siguientes(event, true);
  }

}
