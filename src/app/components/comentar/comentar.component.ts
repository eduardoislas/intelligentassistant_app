import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.scss'],
})
export class ComentarComponent implements OnInit {

  @Input() post;

  constructor(private postsService: PostsService, private modalCtrl: ModalController, private uiService: UiServiceService) { }

  ngOnInit() { }

  comment = {
    description: ''
  }

 async comentarPost(post) {

    const valido =  await this.postsService.comentarPost(post._id, this.comment);

    if(valido !=null){
      this.uiService.alertMenssage('Se realizo el comentario'); 
    }
    else{
      this.uiService.alertMenssage('Introduce tu comentario'); 
    }

  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }

}
