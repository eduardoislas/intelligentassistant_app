import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Post } from 'src/app/interfaces/interfaces';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { CommentariosComponent } from '../commentarios/commentarios.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  constructor(private favoriteService: FavoriteService, private navCtrl: NavController,private modalCtrl: ModalController, private postsService: PostsService, private uiService: UiServiceService) { }

  
  
  ngOnInit() {}

  async eliminarPost(post){

  this.postsService.eliminarPost(post._id);
  this.uiService.alertMenssage('Publicacion Borrada')

  }

 async verPost(post){

 const modal = await this.modalCtrl.create({
    component: CommentariosComponent,
    componentProps:{
      post
    }
  })
  modal.present();
 }


async favoritoPost(post){

  const valido = await this.favoriteService.favoritePost(this.post)
  console.log(post)

  if(valido !=null) {
    this.uiService.alertMenssage('Favorita'); 
  }
  else{
    this.uiService.alertMenssage('Ya se marco como favorita'); 
  }

 }
 

}
