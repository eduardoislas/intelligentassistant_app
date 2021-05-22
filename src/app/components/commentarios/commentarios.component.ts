import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import { Comment } from 'src/app/interfaces/interfaces'
import { ComentarComponent } from '../comentar/comentar.component';

@Component({
  selector: 'app-commentarios',
  templateUrl: './commentarios.component.html',
  styleUrls: ['./commentarios.component.scss'],
})
export class CommentariosComponent implements OnInit {
  @Input() post;
  comment: Comment[] = [];

  scrollActived = true;

  constructor(private postsService: PostsService, private modalCtrl: ModalController) { }


  ngOnInit() {
    this.ObtenerComentarios(this.post);
  }

  async verPost(post) {

    const modal = await this.modalCtrl.create({
      component: ComentarComponent,
      componentProps: {
        post
      }
    })
    modal.present();
  }

  ObtenerComentarios(post, event?, pull: boolean = false) {

    if (pull) {
      this.scrollActived = true;
      this.comment = [];
    }

    this.postsService.getComment(post._id,pull)
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
    this.ObtenerComentarios(this.post,event, true);
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }

}
