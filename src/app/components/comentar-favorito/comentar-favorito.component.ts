import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-comentar-favorito',
  templateUrl: './comentar-favorito.component.html',
  styleUrls: ['./comentar-favorito.component.scss'],
})
export class ComentarFavoritoComponent implements OnInit {

  @Input() favorite;
  constructor( private favoriteService: FavoriteService,private modalCtrl: ModalController, private uiService: UiServiceService) { }

  comment = {
    description: ''
  }

  async comentarFavorite(favorite) {

  const valido = await this.favoriteService.comentarFavorite(favorite.idpost, this.comment);

    if(valido !=null){
      this.uiService.alertMenssage('Se realizo el comentario'); 
    }
    else{
      this.uiService.alertMenssage('Introduce tu comentario'); 
    }
  }
  ngOnInit() { }
  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
