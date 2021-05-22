import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Favorite } from 'src/app/interfaces/interfaces';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { FavoritoDetalleComponent } from '../favorito-detalle/favorito-detalle.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  @Input() favorite: Favorite = {}
  


  constructor(private modalCtrl: ModalController, private favoriteService: FavoriteService, private uiService: UiServiceService) { }

  ngOnInit() {}

  async verFavorite(favorite){

    const modal = await this.modalCtrl.create({
       component: FavoritoDetalleComponent,
       componentProps:{
        favorite
       }
     })
     modal.present();
    }
    eliminarFavorite(favorite){

      this.favoriteService.eliminarFavorite(favorite._id);
        this.uiService.alertMenssage('Favorito Eliminado'); 
    }
}
