import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PostsService } from 'src/app/services/posts.service';
import { Comment } from 'src/app/interfaces/interfaces'
import { ModalController } from '@ionic/angular';
import { ComentarFavoritoComponent } from '../comentar-favorito/comentar-favorito.component';

@Component({
  selector: 'app-favorito-detalle',
  templateUrl: './favorito-detalle.component.html',
  styleUrls: ['./favorito-detalle.component.scss'],
})
export class FavoritoDetalleComponent implements OnInit {
  @Input() favorite;
  comment: Comment[] = [];
  scrollActived = true;

  constructor(private favoriteService: FavoriteService, private modalCtrl: ModalController) { }
  
  ngOnInit() {
    this.ObtenerComentarios(this.favorite)
  }

  async comentarFavorite(favorite) {

    const modal = await this.modalCtrl.create({
      component: ComentarFavoritoComponent,
      componentProps: {
        favorite
      }
    })
    modal.present();
  }

  ObtenerComentarios(favorite, event?, pull: boolean = false) {
    if(pull){
      this.scrollActived=true;
    this.comment = [];
  }
    this.favoriteService.getComment(favorite.idpost)
      .subscribe(resp => {
        console.log(resp);
        this.comment.push(...resp.comment);

        if (event) {
          event.target.complete();
          if (resp.comment.length === 0) {
            this.scrollActived = false;
          }
        }
  
      });
  }

  recargar(event) {
    this.ObtenerComentarios(this.favorite,event, true);
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
